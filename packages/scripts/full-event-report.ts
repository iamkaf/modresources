#!/usr/bin/env tsx
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const steps = [
  'scripts/fabric-event-report.ts',
  'scripts/neoforge-event-report.ts',
  'scripts/forge-event-report.ts',
];

console.log('▶ Generating full event report (Fabric, NeoForge, Forge)...');
for (const script of steps) {
  const result = spawnSync('tsx', [script, ...args], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}