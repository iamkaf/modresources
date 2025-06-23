/**
 * Typed helper to load `mods.v2.json`.
 *
 * The v2 schema groups related information together (ids, urls, icon). Each mod
 * also lists its dependencies and page sections. `readMods` parses the JSON file
 * and returns typed entries for use by the various tools.
 */
import fs from 'fs';
import path from 'path';

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

export type ModsData = ModEntry[];

export function readMods(filePath = path.join(__dirname, '..', 'mods.v2.json')): ModsData {
  const json = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(json) as ModsData;
}
