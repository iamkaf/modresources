#!/usr/bin/env ts-node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  cpSync,
  mkdtempSync,
  rmSync,
} from 'node:fs';
import os from 'node:os';
import { execSync } from 'node:child_process';
import crypto from 'node:crypto';

function usage() {
  console.log(
    'Usage: generateModdy.ts [--dry-run] <patch|minor|major> [notes] (semicolon separated)'
  );
  process.exit(1);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRunIndex = args.indexOf('--dry-run');
  const dryRun = dryRunIndex !== -1;
  if (dryRun) args.splice(dryRunIndex, 1);

  const [bump, ...noteParts] = args;
  if (!bump || !['patch', 'minor', 'major'].includes(bump)) usage();
  const rawNotes = noteParts.join(' ');
  const notes = rawNotes
    ? rawNotes
        .split(/\r?;/) // allow newline separated notes
        .map((n) => n.trim())
        .filter(Boolean)
    : [];

  const root = path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));
  const srcDir = path.join(root, 'moddy', 'src');
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

  const outDir = dryRun
    ? mkdtempSync(path.join(os.tmpdir(), `moddy-dry-${newVersion}-`))
    : path.join(registryDir, newVersion);
  mkdirSync(outDir, { recursive: true });

  const tempDir = mkdtempSync(path.join(os.tmpdir(), 'moddy-src-'));
  const pkgDir = path.join(tempDir, 'moddy');
  cpSync(srcDir, pkgDir, { recursive: true });
  const tempInit = path.join(pkgDir, '__init__.py');
  const devCode = readFileSync(tempInit, 'utf8');
  const updatedCode = devCode.replace(
    /MODDY_VERSION\s*=\s*"DEVELOPMENT"/,
    `MODDY_VERSION = "${newVersion}"`
  );
  writeFileSync(tempInit, updatedCode);
  const outPath = path.join(outDir, 'moddy.py');
  execSync(`python3 -m zipapp ${tempDir} -o ${outPath} -m moddy.main:main`);
  rmSync(tempDir, { recursive: true, force: true });

  const fileData = readFileSync(outPath);
  const hash = crypto.createHash('sha256').update(fileData).digest('hex');
  if (dryRun) {
    rmSync(outDir, { recursive: true, force: true });
  }

  const entry = {
    version: newVersion,
    source: `/moddy/registry/${newVersion}/moddy.py`,
    notes,
    hash,
  };
  versions.unshift(entry);
  if (!dryRun) {
    writeFileSync(versionsPath, JSON.stringify(versions, null, 2) + '\n');
  } else {
    console.log('Would update versions.json');
  }

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
      if (!dryRun) {
        writeFileSync(readmePath, `${head}\n${body}\n`);
        console.log('Updated README changelog');
      } else {
        console.log('Would update README changelog');
      }
    }
  } catch (err) {
    console.warn('Failed to update README:', err);
  }

  if (dryRun) {
    console.log(`Dry run successful for ${newVersion}`);
  } else {
    console.log(`Created ${path.relative(root, outPath)}`);
    console.log(`Updated versions.json with ${newVersion}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
