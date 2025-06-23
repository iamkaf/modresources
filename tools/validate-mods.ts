/**
 * ✅ Validates the structure of `mods.v2.json`.
 *
 * The script loads the JSON via the typed `readMods` helper and performs basic
 * sanity checks on each mod entry. It ensures required fields exist and warns
 * about common issues. The process exits with a non-zero code if validation
 * fails so it can be used in CI.
 */

import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { Validator } from 'jsonschema';
import { ModEntry, readMods } from '../lib/readMods';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modsPath = path.join(__dirname, '..', 'mods.v2.json');
const mods: ModEntry[] = readMods(modsPath);

const schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['id', 'name', 'pages', 'dependencies'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      icon: { type: 'array', items: { type: 'string' } },
      ids: {
        type: 'object',
        properties: {
          modrinth: { type: 'string' },
          curseforge: { type: 'string' },
        },
      },
      urls: {
        type: 'object',
        properties: {
          modrinth: { type: 'string' },
          curseforge: { type: 'string' },
          source: { type: 'string' },
          issues: { type: 'string' },
          support: { type: 'string' },
          discord: { type: 'string' },
        },
      },
      dependencies: {
        type: 'array',
        items: {
          type: 'object',
          required: ['name', 'loader', 'modrinthUrl', 'curseforgeUrl'],
          properties: {
            name: { type: 'string' },
            loader: { enum: ['fabric', 'forge', 'neoforge', 'all'] },
            modrinthUrl: { type: 'string' },
            curseforgeUrl: { type: 'string' },
            notes: { type: 'string' },
          },
        },
      },
      pages: {
        type: 'array',
        items: {
          type: 'object',
          required: ['title', 'level', 'content'],
          properties: {
            title: { type: 'string' },
            level: { type: 'number' },
            content: { type: 'string' },
          },
        },
      },
    },
  },
};

const validator = new Validator();
const result = validator.validate(mods, schema);

if (result.valid) {
  console.log(chalk.green(`✔ mods.v2.json looks good (${mods.length} mods checked)`));
} else {
  for (const err of result.errors) {
    console.error(chalk.red(`✖ ${err.stack}`));
  }
  process.exit(1);
}
