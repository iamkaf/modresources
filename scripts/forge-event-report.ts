import { mkdtempSync, readFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { writeFile } from 'fs/promises';
import fg from 'fast-glob';
import simpleGit from 'simple-git';
import fs from 'fs-extra';
import chalk from 'chalk';
import { Ollama } from 'ollama';
import { performance } from 'perf_hooks';
import { z } from 'zod'; // Import Zod for schema definition
import { zodToJsonSchema } from 'zod-to-json-schema'; // Import utility to convert Zod to JSON schema
import { execSync } from 'child_process';

// Parse command line arguments
const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const LIMIT = limitIndex !== -1 && limitIndex + 1 < args.length ? parseInt(args[limitIndex + 1], 10) : null;

const FORGE_REPO = 'https://github.com/MinecraftForge/MinecraftForge.git';
const SRC_GLOB = '**/net/minecraftforge/**/*.java';
const EXCLUDE_PATTERNS = [/\/internal\//, /\/impl\//, /\/test\//];
const MODEL = process.env.OLLAMA_MODEL ?? 'qwen3';
const CONTEXT_SIZE = 3072;

// WSL detection and ollama configuration
function isWSL(): boolean {
  try {
    const release = readFileSync('/proc/version', 'utf8');
    return release.toLowerCase().includes('microsoft') || release.toLowerCase().includes('wsl');
  } catch {
    return false;
  }
}

function getOllamaHost(): string {
  if (isWSL()) {
    try {
      const hostname = execSync('hostname', { encoding: 'utf8' }).trim();
      return `http://${hostname}.local:11434`;
    } catch {
      console.warn(chalk.yellow('Warning: Could not get hostname, using default ollama host'));
      return 'http://localhost:11434';
    }
  }
  return 'http://localhost:11434';
}

// Configure ollama client
const ollamaHost = getOllamaHost();
if (isWSL()) {
  console.log(chalk.gray(`Detected WSL environment, using ollama host: ${ollamaHost}`));
}
const ollama = new Ollama({ host: ollamaHost });

// Define the Zod schema for the event summary.
// This schema strictly defines the structure of the JSON output we expect from Ollama.
const EventSummarySchema = z.object({
  when: z.string().describe('A concise sentence of when the event fires.'),
  cancellable: z.string().describe('Whether the event is cancellable - "Yes" if it extends ICancellableEvent or has @Cancelable annotation, "No" if not, or "Unknown" if unclear.'),
  fields: z.array(z.object({
    name: z.string().describe('The field name'),
    type: z.string().describe('The field type'),
    description: z.string().describe('What the field represents or is used for')
  })).describe('Array of important public fields available on the event object. Empty array if none found.'),
  methods: z.array(z.object({
    name: z.string().describe('The method name'),
    signature: z.string().describe('The method signature including parameters and return type'),
    description: z.string().describe('What the method does')
  })).describe('Array of important public methods available on the event object. Empty array if none found.'),
  example: z.string().describe('A concise Java code snippet (under 15 lines) showing basic event handling with @SubscribeEvent annotation, demonstrating 1-2 key fields/methods from the event object. Use standard MinecraftForge patterns.')
});

// Infer the TypeScript type from the Zod schema for type safety.
type EventSummary = z.infer<typeof EventSummarySchema>;

interface EventBlock {
  name: string;
  source: string;  // full java file
  file: string;
  side: 'Client' | 'Server' | 'Common';
  category: string;
  summary?: EventSummary; // Updated to use the structured summary type
}

const sideOf = (p: string): EventBlock['side'] => p.includes('/client/') ? 'Client' : p.includes('/server/') ? 'Server' : 'Common';
const catOf = (p: string): string => (p.split('/net/minecraftforge/')[1] ?? p).split('/')[0].replace(/v\d+$/, '') || 'misc';

function generateUniqueFilename(): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const limitSuffix = LIMIT ? `-limit${LIMIT}` : '';
  return `docs/forge-events-summary-${timestamp}${limitSuffix}.md`;
}

async function clone(): Promise<string> {
  const dir = mkdtempSync(path.join(tmpdir(), 'forge-src-'));
  console.log(chalk.gray(`Cloning Forge repo into temporary directory: ${dir}`));
  await simpleGit().clone(FORGE_REPO, dir, ['--depth', '1']);
  console.log(chalk.green('Forge repo cloned successfully.'));
  return dir;
}

async function javaFiles(root: string): Promise<string[]> {
  const pattern = path.join(root, SRC_GLOB).replace(/\\/g, '/');
  console.log(chalk.gray(`Searching for Java files matching pattern: ${pattern}`));
  const files = await fg(pattern);
  const filteredFiles = files.filter(f => !EXCLUDE_PATTERNS.some(rx => rx.test(f)));
  console.log(chalk.gray(`Found ${filteredFiles.length} relevant Java files after filtering.`));
  return filteredFiles;
}

function detectEvents(src: string, outer: string): string[] {
  const ids = new Set<string>();
  
  // Event Bus 7: classes that extend MutableEvent or Event
  const eventClass = /public\s+(?:static\s+)?(?:final\s+)?class\s+(\w+)\s+extends\s+(?:MutableEvent|Event)/g;
  let m: RegExpExecArray | null;
  while ((m = eventClass.exec(src))) {
    ids.add(m[1]);
  }
  
  // Event Bus 7: Look for static BUS fields (individual event buses)
  const busField = /static\s+(?:final\s+)?(?:public\s+)?(?:Cancellable)?EventBus\s*<[^>]*>\s+(\w+)/g;
  while ((m = busField.exec(src))) {
    ids.add(`${outer}.${m[1]}`);
  }
  
  // Legacy: Event fields and constants
  const eventField = /static\s+(?:final\s+)?(?:public\s+)?(?:Event|EventBus)\s*<[^>]*>\s+(\w+)/g;
  while ((m = eventField.exec(src))) {
    ids.add(`${outer}.${m[1]}`);
  }
  
  // Look for @SubscribeEvent annotations to find event types
  const subscribeEvent = /@SubscribeEvent[^{]*public\s+\w+\s+\w+\(([^)]+)\)/g;
  while ((m = subscribeEvent.exec(src))) {
    const paramType = m[1].trim().split(/\s+/).pop();
    if (paramType && paramType.includes('Event')) {
      ids.add(paramType);
    }
  }
  
  return [...ids];
}

/**
 * Constructs the prompt for the Ollama model to generate a structured summary.
 * It explicitly asks for JSON output and guides the model on the content for each field.
 * @param ev The EventBlock object containing event details and source code.
 * @returns A string representing the prompt.
 */
function buildPrompt(ev: EventBlock): string {
  return `
### MinecraftForge Event Analysis Task

You are an expert Minecraft modder analyzing MinecraftForge events. Your task is to thoroughly document the event \`${ev.name}\` by analyzing its structure and capabilities.

Provide a comprehensive analysis in JSON format:
\`\`\`json
${JSON.stringify(zodToJsonSchema(EventSummarySchema), null, 2)}
\`\`\`

**Analysis Instructions:**

1. **\`when\`**: Describe when this event fires based on the class documentation and context.

2. **\`cancellable\`**: Determine if the event can be cancelled:
   - Check if it implements Cancellable interface (Event Bus 7 pattern)
   - Look for legacy isCanceled() or setCanceled() methods
   - Check if it extends ICancellableEvent or has @Cancelable annotation
   - Answer "Yes", "No", or "Unknown"

3. **\`fields\`**: Analyze the event class for important public fields:
   - Return an array of objects with name, type, and description
   - Focus on fields that modders would actually use
   - Exclude internal/private fields
   - Return empty array if no important fields found

4. **\`methods\`**: Analyze the event class for important public methods:
   - Return an array of objects with name, signature, and description
   - Include getters, setters, and utility methods
   - Exclude basic Object methods (toString, equals, etc.)
   - Return empty array if no important methods found

5. **\`example\`**: Create a CONCISE practical usage example (maximum 15 lines):
   - Use simple, modern MinecraftForge patterns
   - Show basic event handler registration and usage
   - Demonstrate 1-2 key fields/methods from the event
   - Keep it practical and focused
   - If event is cancellable, show cancellation
   - Use proper imports and @Mod annotation

### SOURCE CODE TO ANALYZE:

\`\`\`java
${ev.source}
\`\`\`
`;
}

/**
 * Sends a request to Ollama to summarise an event using structured output.
 * It passes the Zod schema as the format parameter to ensure JSON output.
 * @param ev The EventBlock object to summarise.
 * @returns A Promise that resolves to the parsed EventSummary object.
 */
async function summarise(ev: EventBlock): Promise<EventSummary> {
  try {
    // Add timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout
    
    const res = await ollama.chat({
      model: MODEL,
      options: { num_ctx: CONTEXT_SIZE, temperature: 0.0, num_predict: 800 }, // Limit output length
      messages: [{ role: 'user', content: buildPrompt(ev) }],
      format: zodToJsonSchema(EventSummarySchema),
    });
    
    clearTimeout(timeoutId);

    try {
      const parsedSummary = EventSummarySchema.parse(JSON.parse(res.message.content.trim()));
      return parsedSummary;
    } catch (parseError) {
      console.error(chalk.red(`Parsing error for ${ev.name}:`), parseError);
      return createFallbackSummary(ev.name, 'parsing error');
    }
  } catch (error) {
    console.error(chalk.red(`Network/timeout error for ${ev.name}:`), error);
    return createFallbackSummary(ev.name, 'network/timeout error');
  }
}

function createFallbackSummary(eventName: string, errorType: string): EventSummary {
  return {
    when: `(summary failed: ${errorType})`,
    cancellable: 'Unknown',
    fields: [],
    methods: [],
    example: `// Example generation failed for ${eventName} due to ${errorType}.`
  };
}

/**
 * Unloads the model from VRAM to free up memory.
 * Uses the keep_alive parameter with value 0 to immediately unload the model.
 */
async function unloadModel(): Promise<void> {
  try {
    console.log(chalk.gray('Unloading model to free VRAM...'));
    await ollama.generate({
      model: MODEL,
      prompt: '',
      keep_alive: 0
    });
    console.log(chalk.green('Model unloaded successfully.'));
  } catch (error) {
    console.warn(chalk.yellow('Warning: Could not unload model:'), error);
  }
}

(async () => {
  const limitInfo = LIMIT ? ` (limit: ${LIMIT} events)` : '';
  console.log(chalk.blue.bold(`\n▶ MinecraftForge Event Report v1 (with Structured Outputs)${limitInfo}`));
  const tStart = performance.now();

  console.log(chalk.blue('Cloning Forge repo…'));
  const root = await clone();

  const files = await javaFiles(root);
  console.log(chalk.gray(`Scanning ${files.length} source files…`));

  const events: EventBlock[] = [];
  for (const abs of files) {
    const rel = path.relative(root, abs).replace(/\\/g, '/');
    const src = readFileSync(abs, 'utf8');
    const outer = path.basename(abs, '.java');
    for (const name of detectEvents(src, outer)) {
      events.push({ name, source: src, file: rel, side: sideOf(rel), category: catOf(rel) });
    }
  }

  console.log(chalk.green(`Discovered ${events.length} events.`));

  // Apply limit if specified
  const eventsToProcess = LIMIT ? events.slice(0, LIMIT) : events;
  if (LIMIT) {
    console.log(chalk.yellow(`Limiting processing to ${LIMIT} events (${eventsToProcess.length} will be processed).`));
  }

  for (const ev of eventsToProcess) {
    const t0 = performance.now();
    try {
      ev.summary = await summarise(ev);
    } catch (e) {
      console.error(chalk.red(`Unhandled error during summarization of ${ev.name}:`), e);
      ev.summary = createFallbackSummary(ev.name, 'unhandled error');
    }
    const dt = ((performance.now() - t0) / 1000).toFixed(1);
    console.log(`${chalk.yellow('•')} ${chalk.cyan(ev.name)} ${chalk.gray(dt + 's')}`);
  }

  // Build Markdown Report
  const processedCount = eventsToProcess.filter(ev => ev.summary).length;
  const limitInfo2 = LIMIT ? ` (limited to ${LIMIT} events)` : '';
  const toc = ['# MinecraftForge – Event Handbook', '', `Generated ${new Date().toISOString()} using ${MODEL}${limitInfo2}.`, `Processed ${processedCount} out of ${events.length} total events.`, '', '## Table of Contents'];
  const body = [] as string[];
  const group: Record<string, EventBlock[]> = {};
  for (const ev of eventsToProcess) (group[ev.category] ||= []).push(ev);

  for (const cat of Object.keys(group).sort()) {
    const title = cat[0].toUpperCase() + cat.slice(1);
    toc.push(`- [${title}](#${cat})`);
    body.push(`\n## ${title}\n`);
    for (const ev of group[cat].sort((a, b) => a.name.localeCompare(b.name))) {
      toc.push(`  - [${ev.name}](#${ev.name.toLowerCase()})`);
      body.push(`### ${ev.name} *(${ev.side})*\n`);
      // Access structured summary properties
      body.push(`**When**: ${ev.summary?.when ?? '*(no summary)*'}\n`);
      body.push(`**Cancellable**: ${ev.summary?.cancellable ?? '*(unknown)*'}\n`);
      // Format fields as YAML list
      const fieldsYaml = ev.summary?.fields?.length 
        ? ev.summary.fields.map(f => `- name: ${f.name}\n  type: ${f.type}\n  description: ${f.description}`).join('\n')
        : '# none detected';
      body.push(`**Fields**:\n\`\`\`yaml\n${fieldsYaml}\n\`\`\`\n`);
      
      // Format methods as YAML list
      const methodsYaml = ev.summary?.methods?.length 
        ? ev.summary.methods.map(m => `- name: ${m.name}\n  signature: ${m.signature}\n  description: ${m.description}`).join('\n')
        : '# none detected';
      body.push(`**Methods**:\n\`\`\`yaml\n${methodsYaml}\n\`\`\`\n`);
      body.push(`**Example**:\n\`\`\`java\n${ev.summary?.example ?? '// No example available.'}\n\`\`\`\n`);
      body.push(`*Source*: \`${ev.file}\``);
      body.push('');
    }
  }

  const outputFilename = generateUniqueFilename();
  await writeFile(outputFilename, [...toc, ...body].join('\n'));
  console.log(chalk.green.bold(`\n✔ Report written → ${outputFilename}`));
  
  // Unload the model to free VRAM
  await unloadModel();
  
  console.log(chalk.blue.bold(`Total time: ${((performance.now() - tStart) / 1000).toFixed(1)}s`));

  // Clean up temporary directory
  try {
    await fs.remove(root);
    console.log(chalk.gray(`Cleaned up temporary directory: ${root}`));
  } catch (e) {
    console.error(chalk.red(`Error cleaning up temporary directory ${root}:`), e);
  }
})();