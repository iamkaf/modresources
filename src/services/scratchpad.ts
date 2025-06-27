// Scratchpad helpers.
//
// Converts scratchpad.md into a JSON-safe string and copies it to the clipboard.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import clipboardy from 'clipboardy';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function processScratchpad(): string {
  const file = path.join(ROOT, 'docs', 'scratchpad.md');
  const content = fs.readFileSync(file, 'utf-8');
  const sanitized = content.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');
  clipboardy.writeSync(`"${sanitized}"`);
  return sanitized;
}
