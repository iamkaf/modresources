export interface PageSection {
  title: string;
  level: number;
  content: string;
}

export interface Dependency {
  name: string;
  loader: 'fabric' | 'forge' | 'neoforge' | 'all';
  modrinthUrl: string;
  curseforgeUrl: string;
  notes?: string;
}

export interface ModEntry {
  id: string;
  name: string;
  icon?: string[];
  ids?: {
    modrinth?: string;
    curseforge?: string;
  };
  urls?: {
    modrinth?: string;
    curseforge?: string;
    source?: string;
    issues?: string;
    support?: string;
    discord?: string;
  };
  dependencies: Dependency[];
  pages: PageSection[];
}

const base = '';

export async function listMods(): Promise<ModEntry[]> {
  const res = await fetch(base + '/api/mods');
  return res.json();
}

export async function getMod(id: string): Promise<ModEntry> {
  const res = await fetch(`${base}/api/mods/${id}`);
  if (!res.ok) throw new Error('Not found');
  return res.json();
}

export async function addMod(mod: ModEntry): Promise<void> {
  const res = await fetch(base + '/api/mods', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mod),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function updateMod(id: string, mod: Partial<ModEntry>): Promise<void> {
  const res = await fetch(`${base}/api/mods/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mod),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function deleteMod(id: string): Promise<void> {
  const res = await fetch(`${base}/api/mods/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(await res.text());
}
