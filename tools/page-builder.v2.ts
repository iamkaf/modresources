/**
 * 📑 Generates README pages using the new `mods.v2.json` schema.
 *
 * Each mod lists its page content as an array of sections.  For each section the
 * builder either inserts a matching file from `pages/common` (if one exists) or
 * creates a heading with the supplied level and content. The final Markdown is
 * written to `pages/<id>/README.md`.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { readMods, ModEntry } from '../src/readMods.js';

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to important files and directories
const modsJsonPath = path.join(__dirname, '../mods.v2.json');
const commonDir = path.join(__dirname, '../pages/common');
const outputDir = path.join(__dirname, '../pages');
const commonPath = (name: string) => path.join(commonDir, `${name}.md`);
const outputPath = (mod: ModEntry) => path.join(outputDir, mod.id, 'README.md');

const modsData: ModEntry[] = readMods(modsJsonPath);

function generateContent(mod: ModEntry): string {
  let result = '';
  for (const section of mod.pages) {
    const commonFile = commonPath(section.title);
    if (fs.existsSync(commonFile)) {
      result += fs.readFileSync(commonFile, 'utf-8') + '\n\n';
      continue;
    }
    const heading = '#'.repeat(section.level) + ' ' + section.title + '\n\n';
    result += heading + section.content + '\n\n';
  }
  return result;
}

for (const mod of modsData) {
  if (!mod.pages || mod.pages.length === 0) {
    continue;
  }

  const content = generateContent(mod);

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputPath(mod)), { recursive: true });

  // Write the generated content to the file
  fs.writeFileSync(outputPath(mod), content, 'utf-8');

  // console.log(chalk.green('✔') + chalk.bold(` Generated ${outputPath(mod)}`));
}

console.log(chalk.bold.green('\nAll mod pages generated successfully (v2)!'));
modsData
  .filter((mod) => mod.pages && mod.pages.length)
  .forEach((mod) => {
    console.log(`${chalk.cyan('→')} ${chalk.bold(mod.name)}: ${chalk.magenta(`./pages/${mod.id}/README.md`)}`);
  });
