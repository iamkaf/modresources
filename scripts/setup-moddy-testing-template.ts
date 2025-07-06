#!/usr/bin/env tsx
import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs-extra';

// Clone the multiloader-template repository for Moddy setup verification
const TEMPLATE_URL = 'https://github.com/iamkaf/multiloader-template.git';
const DEST = path.join(__dirname, '..', 'moddy', 'testing-template');

console.log(`▶ Cloning multiloader-template into ${DEST}...`);
// Remove any existing directory to ensure a clean clone
fs.removeSync(DEST);
// Perform a shallow clone
execSync(`git clone --depth 1 ${TEMPLATE_URL} ${DEST}`, { stdio: 'inherit' });
console.log('✔ Clone complete.');