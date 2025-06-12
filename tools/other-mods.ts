/**
 * 🛠 Generates a Markdown snippet listing all mods.
 *
 * Reads `mods.v2.json` and writes a simple "Check out my other mods!" section
 * to `pages/common/othermods.md`. Each mod is shown as a linked icon pointing to
 * its Modrinth page.
 */
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { readMods, ModEntry } from '../src/readMods.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modsPath = path.join(__dirname, '../mods.v2.json');
const mods: ModEntry[] = readMods(modsPath);

const lines: string[] = ['## Check out my other mods!\n'];
for (const mod of mods) {
  const iconUrl = `https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.id}/icon.v2.png`;
  lines.push(`<a href="${mod.urls?.modrinth ?? '#'}"><img src="${iconUrl}" alt="${mod.name}" width="100"></a>`);
}

const output = lines.join('\n');
const outPath = path.join(__dirname, '../pages/common/othermods.md');
fs.writeFileSync(outPath, output, 'utf-8');
console.log(chalk.green(`✔ Generated ${outPath}`));
