export async function fetchChangelog(loader: 'fabric' | 'neoforge' | 'forge'): Promise<string> {
  const repos: Record<string, { owner: string; repo: string }> = {
    fabric: { owner: 'FabricMC', repo: 'fabric-loader' },
    neoforge: { owner: 'NeoForged', repo: 'NeoForge' },
    forge: { owner: 'MinecraftForge', repo: 'MinecraftForge' },
  };

  const target = repos[loader];
  if (!target) throw new Error(`Unsupported loader: ${loader}`);

  const url = `https://api.github.com/repos/${target.owner}/${target.repo}/releases/latest`;
  const res = await fetch(url);
  if (!res.ok) {
    return `No changelog found for ${loader}`;
  }
  const data = (await res.json()) as { body?: string };
  return data.body || `No changelog found for ${loader}`;
}
