#!/usr/bin/env ts-node
import path from 'path';
import fs from 'fs-extra';

// Remove the cloned multiloader-template directory
const DEST = path.join(__dirname, '..', 'moddy', 'testing-template');

console.log(`▶ Removing testing template at ${DEST}...`);
fs.removeSync(DEST);
console.log('✔ Cleanup complete.');