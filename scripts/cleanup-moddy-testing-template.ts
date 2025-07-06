#!/usr/bin/env tsx
import path from 'path';
import fs from 'fs-extra';

// Remove the cloned multiloader-template directory
const DEST = path.join(__dirname, '..', 'moddy', 'testing-template');

console.log(`▶ Removing testing template at ${DEST}...`);
try {
  fs.removeSync(DEST);
  console.log('✔ Cleanup complete.');
} catch (err: any) {
  console.error(`⚠️  Warning: cleanup failed: ${err.message}`);
}