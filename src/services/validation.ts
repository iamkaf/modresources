// JSON validation utilities.
//
// validateMods ensures that mods.v2.json conforms to the expected schema and
// reports any errors.

import path from 'path';
import { fileURLToPath } from 'url';
import { Validator } from 'jsonschema';
import { readMods } from '../utils/readMods';
import type { ModEntry } from '../utils/readMods';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function validateMods(): string {
  const modsPath = path.join(ROOT, 'mods.v2.json');
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
    return `✔ mods.v2.json looks good (${mods.length} mods checked)`;
  }
  const lines = result.errors.map((e) => `✖ ${e.stack}`).join('\n');
  return lines;
}
