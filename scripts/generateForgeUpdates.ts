#!/usr/bin/env ts-node
/**
 * Generate NeoForge update JSON files for each mod using Modrinth API.
 *
 * For every mod entry in `mods.v2.json` with a Modrinth ID this script
 * queries the Modrinth API for its latest NeoForge/Forge version and
 * constructs the update JSON as described in the NeoForge documentation.
 *
 * The Modrinth endpoint that returns Forge update JSON is currently broken
 * so we re-create the file from scratch using the most recent version
 * metadata.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';
import { readMods } from '../src/utils/readMods';

async function generate() {
  const root = path.dirname(fileURLToPath(import.meta.url));
  const modsPath = path.join(root, '..', 'mods.v2.json');
  const outDir = path.join(root, '..', 'update');

  await mkdir(outDir, { recursive: true });

  const mods = readMods(modsPath);

  for (const mod of mods) {
    const modrinthId = mod.ids?.modrinth;
    if (!modrinthId) continue;

    console.log(`› Fetching latest version for ${mod.name}…`);

    try {
      const res = await fetch(
        `https://api.modrinth.com/v2/project/${modrinthId}/version`
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch versions: ${res.status} ${res.statusText}`);
      }
      const versions = (await res.json()) as any[];
      const neoVersion = versions.find((v) =>
        Array.isArray(v.loaders) &&
        (v.loaders.includes('neoforge') || v.loaders.includes('forge'))
      );

      if (!neoVersion) {
        console.log(`• No NeoForge release found for ${mod.name}`);
        continue;
      }

      const updateData: Record<string, any> = {
        homepage: mod.urls?.modrinth ?? '',
        promos: {},
      };

      const versionNumber = neoVersion.version_number as string;
      const changelog = neoVersion.changelog ?? '';
      for (const mc of neoVersion.game_versions as string[]) {
        if (!updateData[mc]) updateData[mc] = {};
        updateData[mc][versionNumber] = changelog;
        (updateData.promos as Record<string, string>)[`${mc}-latest`] = versionNumber;
      }

      const filePath = path.join(outDir, `${mod.id}.json`);
      await writeFile(filePath, JSON.stringify(updateData, null, 2));
      console.log(`✔ Wrote ${filePath}`);
    } catch (err) {
      console.error(`Failed to fetch updates for ${mod.name}:`, err);
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
