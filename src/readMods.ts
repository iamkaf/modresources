/**
 * Utility types and helper to load `mods.v2.json`.
 *
 * `readMods` reads the JSON file and returns a strongly typed array of mod
 * entries so other tools can safely access the data.
 */
import fs from 'fs';
import path from 'path';

export interface HeaderSection {
  title: string;
  banner?: string;
  description: string;
  dependencies?: string;
  extra?: string;
}

export interface HowToSection {
  how_to_use: string;
}
export interface ImagesSection {
  images: string;
}
export interface ConfigSection {
  config: string;
}
export interface QnaSection {
  [key: string]: string;
}
export interface CompatibilitySection {
  message: string;
}
export interface CreditsSection {
  credits: string[];
}

export interface Page {
  header: HeaderSection;
  howto?: HowToSection;
  images?: ImagesSection;
  config?: ConfigSection;
  qna?: QnaSection;
  compatibility?: CompatibilitySection;
  credits?: CreditsSection;
}

export interface ModEntry {
  slug: string;
  name: string;
  modrinthId?: string;
  curseforgeId?: number;
  modrinthUrl?: string;
  curseforgeUrl?: string;
  page: Page;
}

export type ModsData = ModEntry[];

export function readMods(filePath = path.join(__dirname, '..', 'mods.v2.json')): ModsData {
  const json = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(json) as ModsData;
}
