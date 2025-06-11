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
import { readMods, ModEntry } from '../src/readMods.js';
import { Validator } from 'jsonschema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modsPath = path.join(__dirname, '..', 'mods.v2.json');
const mods: ModEntry[] = readMods(modsPath);

const schema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['slug', 'name', 'page'],
    properties: {
      slug: { type: 'string' },
      name: { type: 'string' },
      modrinthId: { type: 'string' },
      curseforgeId: { type: 'number' },
      modrinthUrl: { type: 'string' },
      curseforgeUrl: { type: 'string' },
      page: {
        type: 'object',
        required: ['header'],
        properties: {
          header: {
            type: 'object',
            required: ['title', 'description'],
            properties: {
              title: { type: 'string' },
              banner: { type: 'string' },
              description: { type: 'string' },
              dependencies: { type: ['string', 'null'] },
              extra: { type: ['string', 'null'] }
            }
          },
          howto: {
            type: 'object',
            properties: { how_to_use: { type: 'string' } }
          },
          images: {
            type: 'object',
            properties: { images: { type: 'string' } }
          },
          config: {
            type: 'object',
            properties: { config: { type: 'string' } }
          },
          qna: {
            type: 'object',
            additionalProperties: { type: 'string' }
          },
          compatibility: {
            type: 'object',
            properties: { message: { type: 'string' } }
          },
          credits: {
            type: 'object',
            properties: {
              credits: { type: 'array', items: { type: 'string' } }
            }
          }
        }
      }
    }
  }
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
