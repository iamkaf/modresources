// Icon generation utilities.
//
// This module creates PNG icons by compositing multiple image layers as defined
// in mods.v2.json.

import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import sharp from 'sharp';
import { ModEntry, readMods } from '../../lib/readMods';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export async function generateIcons(): Promise<void> {
  const modsJsonPath = path.join(ROOT, 'mods.v2.json');
  const modsData: ModEntry[] = readMods(modsJsonPath);
  const outputDir = path.join(ROOT, 'pages');
  const outputFilePath = (id: string) => path.join(outputDir, id, 'icon.v2.png');

  const generateIcon = async (filePaths: string[], id: string) => {
    const images = filePaths.map((p) => sharp(path.join('tools/icon-parts', p)));
    const { width, height } = await images[0].metadata();
    const base = sharp({
      create: { width: width!, height: height!, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    });
    const composite = [] as { input: Buffer }[];
    for (const img of images) composite.push({ input: await img.toBuffer() });
    await base.composite(composite).png().toFile(outputFilePath(id));
    console.log(chalk.green(`✅ Icon for ${id} generated successfully`));
  };

  const promises: Promise<void>[] = [];
  for (const mod of modsData) {
    if (mod.icon) promises.push(generateIcon(mod.icon, mod.id));
  }
  await Promise.all(promises);
  console.log(chalk.green(`✅ Generated ${promises.length} icons successfully.`));
}
