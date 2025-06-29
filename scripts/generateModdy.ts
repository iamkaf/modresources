#!/usr/bin/env ts-node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import crypto from 'node:crypto';

function usage() {
  console.log(
    'Usage: generateModdy.ts <patch|minor|major> [notes] (newline separated)'
  );
  process.exit(1);
}

async function main() {
  const [bump, ...noteParts] = process.argv.slice(2);
  if (!bump || !['patch', 'minor', 'major'].includes(bump)) usage();
  const rawNotes = noteParts.join(' ');
  const notes = rawNotes
    ? rawNotes
        .split(/\r?\n/) // allow newline separated notes
        .map((n) => n.trim())
        .filter(Boolean)
    : [];

  const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
  const devPath = path.join(root, 'moddy', 'development', 'moddy.py');
  const versionsPath = path.join(root, 'moddy', 'versions.json');
  const registryDir = path.join(root, 'moddy', 'registry');

  const versions = JSON.parse(readFileSync(versionsPath, 'utf8')) as any[];
  const latest = versions[0]?.version || '0.0.0';
  let [maj, min, pat] = latest.split('.').map((v: string) => parseInt(v, 10));
  if (bump === 'major') {
    maj++; min = 0; pat = 0;
  } else if (bump === 'minor') {
    min++; pat = 0;
  } else {
    pat++;
  }
  const newVersion = `${maj}.${min}.${pat}`;

  const outDir = path.join(registryDir, newVersion);
  mkdirSync(outDir, { recursive: true });

  const devCode = readFileSync(devPath, 'utf8');
  const updatedCode = devCode.replace(
    /MODDY_VERSION\s*=\s*"DEVELOPMENT"/,
    `MODDY_VERSION = "${newVersion}"`
  );
  const outPath = path.join(outDir, 'moddy.py');
  writeFileSync(outPath, updatedCode);

  const hash = crypto.createHash('sha256').update(updatedCode).digest('hex');

  const entry = {
    version: newVersion,
    source: `/moddy/registry/${newVersion}/moddy.py`,
    notes,
    hash,
  };
  versions.unshift(entry);
  writeFileSync(versionsPath, JSON.stringify(versions, null, 2) + '\n');

  const readmePath = path.join(root, 'moddy', 'README.md');
  try {
    const readme = readFileSync(readmePath, 'utf8');
    const marker = '## Changelog';
    const idx = readme.indexOf(marker);
    if (idx !== -1) {
      const head = readme.slice(0, idx + marker.length);
      const body = versions
        .map((v) => {
          const notesList = v.notes?.map((n: string) => `- ${n}`).join('\n') || '';
          return `\n\n### ${v.version}\n${notesList}`.trimEnd();
        })
        .join('\n');
      writeFileSync(readmePath, `${head}\n${body}\n`);
      console.log('Updated README changelog');
    }
  } catch (err) {
    console.warn('Failed to update README:', err);
  }

  console.log(`Created ${path.relative(root, outPath)}`);
  console.log(`Updated versions.json with ${newVersion}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
