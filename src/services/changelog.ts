export async function fetchChangelog(loader: 'fabric' | 'neoforge' | 'forge'): Promise<string> {
  const repos: Record<string, { owner: string; repo: string }> = {
    fabric: { owner: 'FabricMC', repo: 'fabric-loader' },
  };

  if (loader === 'neoforge' || loader === 'forge') {
    const base =
      loader === 'neoforge'
        ? 'https://maven.neoforged.net/releases/net/neoforged/neoforge'
        : 'https://maven.minecraftforge.net/net/minecraftforge/forge';

    const metaRes = await fetch(`${base}/maven-metadata.xml`);
    if (!metaRes.ok) {
      return `No changelog found for ${loader}`;
    }
    const xml = await metaRes.text();
    const match = xml.match(/<latest>([^<]+)<\/latest>/);
    const version = match?.[1];
    if (!version) return `No changelog found for ${loader}`;

    const prefix = loader === 'neoforge' ? 'neoforge' : 'forge';
    const logRes = await fetch(`${base}/${version}/${prefix}-${version}-changelog.txt`);
    if (!logRes.ok) {
      return `No changelog found for ${loader}`;
    }
    return await logRes.text();
  }

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
