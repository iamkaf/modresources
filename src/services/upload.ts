// Utilities for uploading generated README pages.
//
// The uploadPage function pushes the README to Modrinth and opens the
// corresponding CurseForge project for manual updates.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import open from 'open';
import { config } from 'dotenv';
import { readMods } from '../utils/readMods';
import type { ModEntry } from '../utils/readMods';

config();

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export async function uploadPage(id: string): Promise<void> {
  const modsPath = path.join(ROOT, 'mods.v2.json');
  const mods: ModEntry[] = readMods(modsPath);
  const mod = mods.find((m) => m.id === id);
  if (!mod) throw new Error(`Mod ${id} not found`);
  if (!mod.ids?.modrinth) throw new Error(`Mod ${id} does not have a Modrinth ID`);

  const modPageMd = fs.readFileSync(path.join(ROOT, 'pages', mod.id, 'README.md'), 'utf-8');
  const payload = { body: modPageMd + `\n\n---\n\n📃 ${new Date().toISOString()}` };

  const apiKey = process.env.MODRINTH_API_KEY;
  if (!apiKey) throw new Error('MODRINTH_API_KEY missing in env');

  const response = await fetch(`https://api.modrinth.com/v2/project/${mod.ids.modrinth}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'User-Agent': "iamkaf's Modrinth Page Uploader (https://github.com/iamkaf/modresources)",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Failed to update project: ${response.statusText}`);

  clipboardy.writeSync(modPageMd);
  if (mod.ids?.curseforge) {
    const url = `https://authors.curseforge.com/#/projects/${mod.ids.curseforge}/description`;
    open(url);
  }
  console.log(chalk.green.bold(`✔ Successfully updated project ${mod.name}`));
}
