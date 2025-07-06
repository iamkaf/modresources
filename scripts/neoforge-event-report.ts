import { mkdtempSync, readFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { writeFile } from 'fs/promises';
import fg from 'fast-glob';
import simpleGit from 'simple-git';
import fs from 'fs-extra';
import chalk from 'chalk';
const PARTIAL_DIR = 'tmp-event-summaries';
import { Ollama } from 'ollama';
import { performance } from 'perf_hooks';
import { z } from 'zod'; // Import Zod for schema definition
import { zodToJsonSchema } from 'zod-to-json-schema'; // Import utility to convert Zod to JSON schema
import { execSync } from 'child_process';

// Parse command line arguments
const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const LIMIT = limitIndex !== -1 && limitIndex + 1 < args.length ? parseInt(args[limitIndex + 1], 10) : null;

const NEOFORGE_REPO = 'https://github.com/neoforged/NeoForge.git';
const SRC_GLOB = '**/net/neoforged/neoforge/**/*.java';
const EXCLUDE_PATTERNS = [/\/internal\//, /\/impl\//, /\/test\//];
const MODEL = process.env.OLLAMA_MODEL ?? 'qwen3';
const CONTEXT_SIZE = 4096;

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
  example: z.string().describe('A Java code snippet showing how to register and handle the event, demonstrating usage of key fields/methods from the event object.')
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
const catOf = (p: string): string => (p.split('/net/neoforged/neoforge/')[1] ?? p).split('/')[0].replace(/v\d+$/, '') || 'misc';

function generateUniqueFilename(): string {
  if (LIMIT) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `neoforge-events-summary-${timestamp}-limit${LIMIT}.md`;
    return `${PARTIAL_DIR}/${filename}`;
  }
  return 'docs/neoforge-events-summary.md';
}

async function clone(): Promise<string> {
  const dir = mkdtempSync(path.join(tmpdir(), 'neoforge-src-'));
  console.log(chalk.gray(`Cloning NeoForge repo into temporary directory: ${dir}`));
  await simpleGit().clone(NEOFORGE_REPO, dir, ['--depth', '1']);
  console.log(chalk.green('NeoForge repo cloned successfully.'));
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
  
  // NeoForge: classes that extend Event or MutableEvent
  const eventClass = /public\s+(?:static\s+)?(?:final\s+)?class\s+(\w+)\s+extends\s+(?:Event|MutableEvent)/g;
  let m: RegExpExecArray | null;
  while ((m = eventClass.exec(src))) {
    ids.add(m[1]);
  }
  
  // NeoForge: Look for static BUS fields (individual event buses)
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
  
  // Look for classes that implement ICancellableEvent
  const cancellableEvent = /public\s+(?:static\s+)?(?:final\s+)?class\s+(\w+).*implements.*ICancellableEvent/g;
  while ((m = cancellableEvent.exec(src))) {
    ids.add(m[1]);
  }
  
  // Look for classes with @Cancelable annotation
  const cancelableEvent = /@Cancelable[^{]*public\s+(?:static\s+)?(?:final\s+)?class\s+(\w+)/g;
  while ((m = cancelableEvent.exec(src))) {
    ids.add(m[1]);
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
### NeoForge Event Analysis Task

You are an expert Minecraft modder analyzing NeoForge events. Your task is to thoroughly document the event \`${ev.name}\` by analyzing its structure and capabilities.

Provide a comprehensive analysis in JSON format:
\`\`\`json
${JSON.stringify(zodToJsonSchema(EventSummarySchema), null, 2)}
\`\`\`

**Analysis Instructions:**

1. **\`when\`**: Describe when this event fires based on the class documentation and context.

2. **\`cancellable\`**: Determine if the event can be cancelled:
   - Check if it extends ICancellableEvent or has @Cancelable annotation
   - Look for isCanceled() or setCanceled() methods
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

5. **\`example\`**: Create a practical usage example:
   - Use @SubscribeEvent annotation
   - Show how to access and use the event's fields/methods
   - Demonstrate real-world usage patterns
   - If cancellable, show how to cancel it

**IMPORTANT**: Focus on the event object itself - its fields, methods, and capabilities that modders need to know about.

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
  const res = await ollama.chat({
    model: MODEL,
    options: { num_ctx: CONTEXT_SIZE, temperature: 0.0 },
    messages: [{ role: 'user', content: buildPrompt(ev) }],
    format: zodToJsonSchema(EventSummarySchema),
  });

  try {
    const parsedSummary = EventSummarySchema.parse(JSON.parse(res.message.content.trim()));
    return parsedSummary;
  } catch (error) {
    console.error(chalk.red(`Error parsing or validating summary for ${ev.name}:`), error);
    return {
      when: '(summary failed: parsing error)',
      cancellable: '(summary failed: parsing error)',
      fields: [],
      methods: [],
      example: `// Example generation failed for ${ev.name} due to parsing error.`
    };
  }
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
  console.log(chalk.blue.bold(`\n▶ NeoForge Event Report v1 (with Structured Outputs)${limitInfo}`));
  const tStart = performance.now();

  console.log(chalk.blue('Cloning NeoForge repo…'));
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

  for (const [i, ev] of eventsToProcess.entries()) {
    const t0 = performance.now();
    try {
      ev.summary = await summarise(ev);
    } catch (e) {
      console.error(chalk.red(`Unhandled error during summarization of ${ev.name}:`), e);
      ev.summary = {
        when: '(summary failed: unhandled error)',
        cancellable: '(summary failed: unhandled error)',
        fields: [],
        methods: [],
        example: `// Example generation failed for ${ev.name} due to unhandled error.`
      };
    }
    const dt = ((performance.now() - t0) / 1000).toFixed(1);
    console.log(`${chalk.gray(`[${i+1}/${eventsToProcess.length}]`)} ${chalk.yellow('•')} ${chalk.cyan(ev.name)} ${chalk.gray(dt + 's')}`);
  }

  // Build Markdown Report
  const processedCount = eventsToProcess.filter(ev => ev.summary).length;
  const limitInfo2 = LIMIT ? ` (limited to ${LIMIT} events)` : '';
  const toc = ['# NeoForge – Event Handbook', '', `Generated ${new Date().toISOString()} using ${MODEL}${limitInfo2}.`, `Processed ${processedCount} out of ${events.length} total events.`, '', '## Table of Contents'];
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
  await fs.ensureDir(path.dirname(outputFilename));
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