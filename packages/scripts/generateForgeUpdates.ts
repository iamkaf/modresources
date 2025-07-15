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
import { readMods } from '../frontend/src/utils/readMods';

// TypeScript interfaces for version processing
interface ModrinthVersion {
  version_number: string;
  changelog: string;
  date_published: string;
  game_versions: string[];
  loaders: string[];
}

interface VersionsByMC {
  [mcVersion: string]: ModrinthVersion[];
}

interface LatestVersionsPerMC {
  [mcVersion: string]: ModrinthVersion;
}

/**
 * Finds the latest mod version for each Minecraft version from an array of versions.
 * Filters to only include NeoForge/Forge compatible versions and handles missing date_published fields.
 * 
 * @param versions Array of ModrinthVersion objects from the API
 * @param modName Name of the mod for logging purposes
 * @returns Map of Minecraft version to latest compatible mod version
 */
function findLatestVersionsPerMC(versions: ModrinthVersion[], modName: string): LatestVersionsPerMC {
  // Filter to only NeoForge/Forge compatible versions
  const forgeVersions = versions.filter(v => 
    Array.isArray(v.loaders) && 
    (v.loaders.includes('neoforge') || v.loaders.includes('forge'))
  );

  // Group versions by Minecraft version
  const versionsByMC: VersionsByMC = {};
  for (const version of forgeVersions) {
    for (const mcVersion of version.game_versions) {
      if (!versionsByMC[mcVersion]) {
        versionsByMC[mcVersion] = [];
      }
      versionsByMC[mcVersion].push(version);
    }
  }

  // Find latest version for each Minecraft version
  const latestVersionsPerMC: LatestVersionsPerMC = {};
  for (const [mcVersion, mcVersions] of Object.entries(versionsByMC)) {
    // Filter out versions missing date_published field
    const validVersions = mcVersions.filter(v => {
      if (!v.date_published) {
        console.warn(`  ⚠ Skipping version ${v.version_number} for MC ${mcVersion} in ${modName}: missing date_published field`);
        return false;
      }
      return true;
    });

    if (validVersions.length === 0) {
      console.warn(`  ⚠ No compatible versions found for MC ${mcVersion} in ${modName} after filtering`);
      continue;
    }

    // Find the latest version by date_published
    const latest = validVersions.reduce((latest, current) => 
      new Date(current.date_published) > new Date(latest.date_published) ? current : latest
    );

    latestVersionsPerMC[mcVersion] = latest;
  }

  return latestVersionsPerMC;
}

async function generate() {
  const root = path.dirname(fileURLToPath(import.meta.url));
  const modsPath = path.join(root, '..', '..', 'mods.v2.json');
  const outDir = path.join(root, '..', '..', 'update');

  await mkdir(outDir, { recursive: true });

  const mods = readMods(modsPath);

  for (const mod of mods) {
    const modrinthId = mod.ids?.modrinth;
    if (!modrinthId) continue;

    console.log(`› Fetching latest version for ${mod.name}…`);

    try {
      const res = await fetch(`https://api.modrinth.com/v2/project/${modrinthId}/version`);
      if (!res.ok) {
        throw new Error(`Failed to fetch versions: ${res.status} ${res.statusText}`);
      }
      const versions = (await res.json()) as ModrinthVersion[];
      
      // Use new version selection logic to find latest version per MC version
      const latestVersionsPerMC = findLatestVersionsPerMC(versions, mod.name);

      if (Object.keys(latestVersionsPerMC).length === 0) {
        console.log(`• No NeoForge release found for ${mod.name}`);
        continue;
      }

      // Log number of Minecraft versions being processed per mod
      const mcVersionCount = Object.keys(latestVersionsPerMC).length;
      console.log(`• Processing ${mcVersionCount} Minecraft version${mcVersionCount === 1 ? '' : 's'} for ${mod.name}`);

      const updateData: Record<string, any> = {
        homepage: mod.urls?.modrinth ?? '',
        promos: {},
      };

      // Generate update data for each Minecraft version with its respective latest version
      for (const [mcVersion, version] of Object.entries(latestVersionsPerMC)) {
        // Add version changelog entry
        if (!updateData[mcVersion]) updateData[mcVersion] = {};
        updateData[mcVersion][version.version_number] = version.changelog ?? '';
        
        // Add promo entry
        updateData.promos[`${mcVersion}-latest`] = version.version_number;
        
        // Log which specific version gets promoted for each Minecraft version
        console.log(`  • Promoted ${version.version_number} for MC ${mcVersion}`);
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
