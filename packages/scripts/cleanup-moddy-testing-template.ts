#!/usr/bin/env ts-node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

// Remove the cloned multiloader-template directory
const DEST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'moddy', 'testing-template');

console.log(`▶ Removing testing template at ${DEST}...`);
try {
  fs.removeSync(DEST);
  console.log('✔ Cleanup complete.');
} catch (err: any) {
  console.error(`⚠️  Warning: cleanup failed: ${err.message}`);
}