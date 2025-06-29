import chalk from 'chalk';

export type Loader = 'fabric' | 'neoforge' | 'forge';

/**
 * Fetch the latest changelog for a project from Modrinth filtered by loader.
 * @param modrinthId Modrinth project ID
 * @param loader Desired mod loader
 */
export async function fetchChangelog(modrinthId: string, loader: Loader): Promise<string> {
  const res = await fetch(`https://api.modrinth.com/v2/project/${modrinthId}/version`);
  if (!res.ok) {
    throw new Error(`Failed to fetch versions: ${res.status} ${res.statusText}`);
  }
  const versions = (await res.json()) as any[];
  const version = versions.find((v) => Array.isArray(v.loaders) && v.loaders.includes(loader));
  if (!version) {
    throw new Error(`No ${loader} version found for ${modrinthId}`);
  }
  const changelog = version.changelog ?? '';
  console.log(chalk.green(`✔ Fetched changelog for ${modrinthId} (${loader})`));
  return changelog as string;
}
