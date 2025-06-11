/**
 * Typed helper to load `mods.v2.json`.
 *
 * The v2 schema groups related information together (ids, urls, icon) and each
 * page is represented as a list of sections with a title, heading level and
 * content. `readMods` parses the JSON file and returns an array of these typed
 * entries for use by the various tools.
 */
import fs from 'fs';
import path from 'path';

export interface PageSection {
  title: string;
  level: number;
  content: string;
}

export interface ModEntry {
  slug: string;
  name: string;
  icon?: string[];
  ids?: {
    modrinth?: string;
    curseforge?: number;
  };
  urls?: {
    modrinth?: string;
    curseforge?: string;
  };
  pages: PageSection[];
}

export type ModsData = ModEntry[];

export function readMods(filePath = path.join(__dirname, '..', 'mods.v2.json')): ModsData {
  const json = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(json) as ModsData;
}
