/**
 * Programmatic manager for entries in `mods.v2.json`.
 *
 * The exported `ModManager` class provides simple CRUD operations that read
 * and write the JSON file on disk. Each method automatically reloads the file
 * to keep multiple calls in sync.
 *
 * Example:
 *   const manager = new ModManager();
 *   manager.add({ slug: 'my-mod', name: 'My Mod', page: { header: { title: 'My Mod', description: '' } } });
 */
import fs from 'fs';
import path from 'path';
import { readMods, ModEntry, ModsData } from './readMods.js';

export class ModManager {
  constructor(private filePath = path.join(__dirname, '..', 'mods.v2.json')) {}

  private load(): ModsData {
    return readMods(this.filePath);
  }

  private save(mods: ModsData): void {
    fs.writeFileSync(this.filePath, JSON.stringify(mods, null, 2) + '\n');
  }

  list(): ModsData {
    return this.load();
  }

  get(slug: string): ModEntry | undefined {
    return this.load().find((m) => m.slug === slug);
  }

  add(entry: ModEntry): void {
    const mods = this.load();
    if (mods.some((m) => m.slug === entry.slug)) {
      throw new Error(`Mod ${entry.slug} already exists`);
    }
    mods.push(entry);
    this.save(mods);
  }

  update(slug: string, partial: Partial<ModEntry>): void {
    const mods = this.load();
    const mod = mods.find((m) => m.slug === slug);
    if (!mod) throw new Error(`Mod ${slug} not found`);
    Object.assign(mod, partial);
    this.save(mods);
  }

  delete(slug: string): void {
    const mods = this.load();
    const idx = mods.findIndex((m) => m.slug === slug);
    if (idx === -1) throw new Error(`Mod ${slug} not found`);
    mods.splice(idx, 1);
    this.save(mods);
  }
}
