import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
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
const modsJsonPath = path.join(__dirname, '../mods.json');
const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

// Get command-line argument for a specific mod, if provided
const specificMod = process.argv[2];

const api = new ModrinthAPI(process.env.MODRINTH_API_KEY);

if (specificMod && !modsData.some((mod) => mod.slug === specificMod)) {
  console.error(chalk.red.bold(`✖ Mod "${specificMod}" not found in mods.json`));
  process.exit(1);
}

for (const mod of modsData) {
  if (specificMod && mod.slug !== specificMod) {
    continue;
  }

  if (!mod.modrinth_id) {
    console.warn(chalk.yellow(`❔ Mod ${mod.slug} does not have a Modrinth ID`));
    continue;
  }

  let modPageMd;
  try {
    modPageMd = fs.readFileSync(path.join(__dirname, '../pages', `${mod.slug}`, 'README.md'), 'utf-8');
  } catch (error) {
    console.error(chalk.red.bold(`✖ Failed to read README.md for ${mod.slug}: ${error}`));
    continue;
  }

  if (!modPageMd) {
    console.warn(chalk.yellow(`❔ Mod ${mod.slug} does not have a Modrinth ID`));
    continue;
  }

  const payload = {
    body: modPageMd + `\n\n---\n\n📃 ${new Date().toISOString()}`,
  };

  api
    .updateProject(mod.modrinth_id, payload)
    .then(() => {
      console.log(chalk.green.bold(`✔ Successfully updated project ${mod.name}`));
    })
    .catch((error) => {
      console.error(chalk.red.bold(`✖ Failed to update project ${mod.modrinth_id}: ${error}`));
    });
}
