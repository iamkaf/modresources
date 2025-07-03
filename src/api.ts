import type { ModEntry } from './utils/readMods';

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

export async function generatePagesV2(): Promise<void> {
  await fetch(`${BASE}/pagesv2`, { method: 'POST' });
}

export async function generateIcons(): Promise<void> {
  await fetch(`${BASE}/icon`, { method: 'POST' });
}

export async function uploadPage(id: string): Promise<void> {
  await fetch(`${BASE}/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
}

export async function validateMods(): Promise<string> {
  const res = await fetch(`${BASE}/validate`, { method: 'POST' });
  return res.text();
}

export async function generateOtherMods(): Promise<void> {
  await fetch(`${BASE}/othermods`, { method: 'POST' });
}

export async function listImagesApi(mod?: string): Promise<Record<string, string[]>> {
  const url = mod ? `${BASE}/images?mod=${encodeURIComponent(mod)}` : `${BASE}/images`;
  const res = await fetch(url);
  return res.json();
}

export async function listTemplatesApi(): Promise<string[]> {
  const res = await fetch(`${BASE}/templates`);
  return res.json();
}

export async function fetchTemplateApi(name: string): Promise<string> {
  const res = await fetch(`${BASE}/templates/${name}`);
  return res.text();
}

export async function fetchChangelogApi(loader: 'fabric' | 'neoforge' | 'forge'): Promise<string> {
  const res = await fetch(`${BASE}/changelog/${loader}`);
  return res.text();
}

export async function convertMovToGif(
  file: File,
  fps: number,
  width: number,
): Promise<Blob> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fps', String(fps));
  formData.append('width', String(width));
  const res = await fetch(`${BASE}/convert`, { method: 'POST', body: formData });
  if (!res.ok) throw new Error(await res.text());
  return res.blob();
}

