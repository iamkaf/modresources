/**
 * ☁️ Uploads generated README pages to the Modrinth API.
 *
 * Uploads a single README page to Modrinth and prepares the CurseForge page.
 *
 * Pass the mod id as the only argument. The script uploads `pages/<id>/README.md`
 * to Modrinth using the API key in `.env`, then copies the markdown to the
 * clipboard and opens the CurseForge author portal for easy pasting.
 */

import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import clipboardy from 'clipboardy';
import open from 'open';
import { readMods, ModEntry } from '../lib/readMods.js';
config();

class ModrinthAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async updateProject(projectId, data) {
    const response = await fetch(`https://api.modrinth.com/v2/project/${projectId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
        'User-Agent': "iamkaf's Modrinth Page Uploader (https://github.com/iamkaf/modresources)",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update project: ${response.statusText}`);
    }
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modsJsonPath = path.join(__dirname, '../mods.v2.json');
const modsData: ModEntry[] = readMods(modsJsonPath);

const id = process.argv[2];

if (!id) {
  console.error(chalk.red('Usage: tsx tools/page-uploader.ts <mod-id>'));
  process.exit(1);
}

const mod = modsData.find((m) => m.id === id);
if (!mod) {
  console.error(chalk.red.bold(`✖ Mod "${id}" not found in mods.v2.json`));
  process.exit(1);
}

const api = new ModrinthAPI(process.env.MODRINTH_API_KEY);

if (!mod.ids?.modrinth) {
  console.warn(chalk.yellow(`❔ Mod ${mod.id} does not have a Modrinth ID`));
  process.exit(1);
}

let modPageMd: string;
try {
  modPageMd = fs.readFileSync(path.join(__dirname, '../pages', `${mod.id}`, 'README.md'), 'utf-8');
} catch (error) {
  console.error(chalk.red.bold(`✖ Failed to read README.md for ${mod.id}: ${error}`));
  process.exit(1);
}

const payload = {
  body: modPageMd + `\n\n---\n\n📃 ${new Date().toISOString()}`,
};

api
  .updateProject(mod.ids!.modrinth!, payload)
  .then(() => {
    console.log(chalk.green.bold(`✔ Successfully updated project ${mod.name}`));
    clipboardy.writeSync(modPageMd);
    const url = `https://authors.curseforge.com/#/projects/${mod.ids?.curseforge}/description`;
    console.log(chalk.blue(`📋 Copied page contents to clipboard.`));
    console.log(chalk.blue(`🌐 Opening ${url}`));
    open(url);
  })
  .catch((error) => {
    console.error(chalk.red.bold(`✖ Failed to update project ${mod.ids!.modrinth}: ${error}`));
  });
