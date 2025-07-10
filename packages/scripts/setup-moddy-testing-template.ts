#!/usr/bin/env ts-node
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs-extra';
import simpleGit from 'simple-git';

// Clone the multiloader-template repository for Moddy setup verification
const TEMPLATE_URL = 'https://github.com/iamkaf/multiloader-template.git';
const DEST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'moddy', 'testing-template');

console.log(`▶ Cloning multiloader-template into ${DEST}...`);
// Remove any existing directory to ensure a clean clone
fs.removeSync(DEST);
// Perform a shallow clone, catch network/permission errors
try {
  const git = simpleGit();
  await git.clone(TEMPLATE_URL, DEST, ['--depth', '1']);
  console.log('✔ Clone complete.');
} catch (err: any) {
  console.error(`⚠️  Warning: git clone failed: ${err.message}`);
}
