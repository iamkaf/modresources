/**
 * Programmatic manager for entries in `mods.v2.json`.
 *
 * The exported `ModManager` class provides simple CRUD operations that read
 * and write the JSON file on disk. Each method automatically reloads the file
 * to keep multiple calls in sync.
 *
 * Example:
 *   const manager = new ModManager();
 *   manager.add({
 *     id: 'my-mod',
 *     name: 'My Mod',
 *     readme: '# My Mod\nThis is my mod.'
 *   });
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readMods } from './utils/readMods';
import type { ModsData, ModEntry } from './utils/readMods';

export class ModManager {
  private filePath: string;

  constructor(filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'mods.v2.json')) {
    this.filePath = filePath;
  }

  private load(): ModsData {
    return readMods(this.filePath);
  }

  private save(mods: ModsData): void {
    fs.writeFileSync(this.filePath, JSON.stringify(mods, null, 2) + '\n');
  }

  list(): ModsData {
    return this.load();
  }

  get(id: string): ModEntry | undefined {
    return this.load().find((m) => m.id === id);
  }

  add(entry: ModEntry): void {
    const mods = this.load();
    if (mods.some((m) => m.id === entry.id)) {
      throw new Error(`Mod ${entry.id} already exists`);
    }
    mods.push(entry);
    this.save(mods);
  }

  update(id: string, partial: Partial<ModEntry>): void {
    const mods = this.load();
    const mod = mods.find((m) => m.id === id);
    if (!mod) throw new Error(`Mod ${id} not found`);
    Object.assign(mod, partial);
    this.save(mods);
  }

  delete(id: string): void {
    const mods = this.load();
    const idx = mods.findIndex((m) => m.id === id);
    if (idx === -1) throw new Error(`Mod ${id} not found`);
    mods.splice(idx, 1);
    this.save(mods);
  }
}
