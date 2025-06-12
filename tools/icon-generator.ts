/**
 * 🖼 Generates composite icons for each mod.
 *
 * The script reads `mods.v2.json` to discover icon layers listed under each
 * mod's `icon` array. Each layer references a file in `tools/icon-parts/` which is
 * stitched together using the Sharp library. The resulting `icon.v2.png` is
 * placed next to each mod's README under `pages/<id>`.
 */

import sharp from 'sharp';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { readMods, ModEntry } from '../src/readMods.js';

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to important files and directories
const modsJsonPath = path.join(__dirname, '../mods.v2.json');
const modsData: ModEntry[] = readMods(modsJsonPath);

const outputDir = path.join(__dirname, '../pages');
const outputFilePath = (id: string) => path.join(outputDir, id, 'icon.v2.png');

// Generate an icon from the provided image parts
const generateIcon = async (filePaths: string[], id: string) => {
  try {
    const images = filePaths.map((filePath) => sharp(path.join('tools/icon-parts', filePath)));

    const { width, height } = await images[0].metadata();
    const baseImage = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    });

    let compositeImages = [];
    for (let image of images) {
      compositeImages.push({ input: await image.toBuffer() });
    }

  const outputPath = outputFilePath(id);
  const finalImage = await baseImage.composite(compositeImages).png().toFile(outputPath);
  console.log(chalk.green(`✅ Icon for ${id} generated successfully at ${outputPath}`));
  return finalImage;
} catch (error) {
  console.error(chalk.red(`❌ Error generating icon for ${id}:`, error));
}
};

console.log(chalk.blue('🔄 Starting icon generation process...'));

const promises = [];

for (const mod of modsData) {
  if (mod.icon) {
    promises.push(generateIcon(mod.icon, mod.id));
  }
}

Promise.all(promises)
  .then(() => {
    console.log(chalk.green(`✅ Generated ${promises.length} icons successfully.`));
  })
  .catch((error) => {
    console.error(chalk.red('❌ Error during icon generation process:', error));
  });
