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

const FABRIC_REPO = 'https://github.com/FabricMC/fabric.git';
const SRC_GLOB = '**/net/fabricmc/fabric/api/**/*.java';
const EXCLUDE_PATTERNS = [/\/registry\//, /\/internal\//];
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
  parameters: z.string().describe('A parameter list copied verbatim from the interface in the source, including the parameter type, or "undetected" if not found.'),
  example: z.string().describe('A Java code snippet showing how to register and handle the event, including an example from source code comments if available.')
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
const catOf = (p: string): string => (p.split('/net/fabricmc/fabric/api/')[1] ?? p).split('/')[0].replace(/v\d+$/, '') || 'misc';

function generateUniqueFilename(): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const limitSuffix = LIMIT ? `-limit${LIMIT}` : '';
  return `docs/fabric-events-summary-${timestamp}${limitSuffix}.md`;
}

async function clone(): Promise<string> {
  const dir = mkdtempSync(path.join(tmpdir(), 'fabric-src-'));
  console.log(chalk.gray(`Cloning Fabric repo into temporary directory: ${dir}`));
  await simpleGit().clone(FABRIC_REPO, dir, ['--depth', '1']);
  console.log(chalk.green('Fabric repo cloned successfully.'));
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
  // Regex to find public interfaces ending with Callback or Events?
  const iface = /public\s+interface\s+(\w+(?:Callback|Events?))/g;
  let m: RegExpExecArray | null;
  while ((m = iface.exec(src))) {
    ids.add(`${m[1]}.EVENT`);
  }
  // Regex to find static final Event fields
  const cst = /static\s+final\s+Event<[^>]+>\s+(\w+)/g;
  while ((m = cst.exec(src))) {
    ids.add(`${outer}.${m[1]}`);
  }
  // console.log(chalk.gray(`Detected ${ids.size} events in file ${outer}.java.`));
  return [...ids];
}

/**
 * Constructs the prompt for the Ollama model to generate a structured summary.
 * It explicitly asks for JSON output and guides the model on the content for each field.
 * @param ev The EventBlock object containing event details and source code.
 * @returns A string representing the prompt.
 */
function buildPrompt(ev: EventBlock): string {
  // The prompt explicitly instructs the model to return a JSON object
  // conforming to the defined schema. This helps guide the model even
  // when the schema is passed via the 'format' parameter.
  return `
### Fabric Event Summary Task

You are an expert Minecraft modder. Your task is to document **only** the event \`${ev.name}\`.
Provide a concise summary of this event in JSON format.
The JSON object must strictly adhere to the following structure:
\`\`\`json
${JSON.stringify(zodToJsonSchema(EventSummarySchema), null, 2)}
\`\`\`

Here are the specific instructions for each field:

1.  **\`when\`**: Describe in one concise sentence when the \`${ev.name}\` event fires.
2.  **\`parameters\`**: List the parameters copied verbatim from the event's interface in the source code, including their types. If no parameters are explicitly found or detectable, state "undetected".
3.  **\`example\`**: Provide a Java code snippet demonstrating how to register and handle the \`${ev.name}\` event.
    * The example should start with \`${ev.name}.register((<callback params>) -> {\`.
    * Inside the lambda function, include a comment \`// Handle ${ev.name} here...\`.
    * **Crucially**, if the provided source code comments for this event include an actual usage example, integrate that example into the body of the lambda function in your generated code snippet. Otherwise, keep the placeholder comment.

### FULL SOURCE CODE FOR REFERENCE:

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
  // console.log(chalk.magenta(`Attempting to summarize event: ${ev.name}`));
  const res = await ollama.chat({
    model: MODEL,
    // think: true, // think true separates the thinking from the output
    options: { num_ctx: CONTEXT_SIZE, temperature: 0.0 }, // Set temperature to 0 for more deterministic output
    messages: [{ role: 'user', content: buildPrompt(ev) }],
    // Pass the JSON schema directly to Ollama's format parameter for structured output enforcement.
    format: zodToJsonSchema(EventSummarySchema),
    // Although 'format: json' is the primary mechanism, some models might benefit from explicit schema
    // instructions in the prompt. The 'response_model' is typically used with 'instructor' library,
    // but for direct Ollama API, 'format: json' combined with prompt instructions is the way.
    // We are not using 'instructor' here, so we rely on 'format: json'.
  });

  // The content from Ollama should now be a JSON string. Parse it and validate.
  try {
    const parsedSummary = EventSummarySchema.parse(JSON.parse(res.message.content.trim()));
    // console.log(chalk.green(`Successfully summarized event: ${ev.name}`));
    return parsedSummary;
  } catch (error) {
    console.error(chalk.red(`Error parsing or validating summary for ${ev.name}:`), error);
    // Return a default error summary if parsing or validation fails
    return {
      when: '(summary failed: parsing error)',
      parameters: '(summary failed: parsing error)',
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
  console.log(chalk.blue.bold('\n▶ Fabric Event Report v10 (with Structured Outputs)'));
  const tStart = performance.now();

  console.log(chalk.blue('Cloning Fabric repo…'));
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
      ev.summary = {
        when: '(summary failed: unhandled error)',
        parameters: '(summary failed: unhandled error)',
        example: `// Example generation failed for ${ev.name} due to unhandled error.`
      };
    }
    const dt = ((performance.now() - t0) / 1000).toFixed(1);
    console.log(`${chalk.yellow('•')} ${chalk.cyan(ev.name)} ${chalk.gray(dt + 's')}`);
  }

  // Build Markdown Report
  const processedCount = eventsToProcess.filter(ev => ev.summary).length;
  const limitInfo = LIMIT ? ` (limited to ${LIMIT} events)` : '';
  const toc = ['# Fabric API – Event Handbook', '', `Generated ${new Date().toISOString()} using ${MODEL}${limitInfo}.`, `Processed ${processedCount} out of ${events.length} total events.`, '', '## Table of Contents'];
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
      body.push(`**Parameters**: ${ev.summary?.parameters ?? '*(no summary)*'}\n`);
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
