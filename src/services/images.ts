// Image listing helpers.
//
// Provides a simple function that returns GitHub URLs for PNG images stored in
// the pages directory.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function listImages(mod?: string): Record<string, string[]> {
  const githubBaseURL = 'https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages';
  const pagesDir = path.join(ROOT, 'pages');
  const result: Record<string, string[]> = {};
  const mods = mod ? [mod] : fs.readdirSync(pagesDir);
  for (const m of mods) {
    const dir = path.join(pagesDir, m);
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) continue;
    const images = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));
    if (images.length) {
      result[m] = images.map((img) => `${githubBaseURL}/${m}/${img}`);
    }
  }
  return result;
}
