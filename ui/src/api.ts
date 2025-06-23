import type { ModEntry } from '../../lib/readMods';

const BASE = '/api';

export async function listMods(): Promise<ModEntry[]> {
  const res = await fetch(`${BASE}/mods`);
  return res.json();
}

export async function getMod(id: string): Promise<ModEntry> {
  const res = await fetch(`${BASE}/mods/${id}`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export async function addMod(mod: ModEntry): Promise<void> {
  await fetch(`${BASE}/mods`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mod),
  });
}

export async function updateMod(id: string, mod: Partial<ModEntry>): Promise<void> {
  await fetch(`${BASE}/mods/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mod),
  });
}

export async function deleteMod(id: string): Promise<void> {
  await fetch(`${BASE}/mods/${id}`, { method: 'DELETE' });
}

