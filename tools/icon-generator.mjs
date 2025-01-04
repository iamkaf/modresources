import sharp from 'sharp';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to important files and directories
const modsJsonPath = path.join(__dirname, '../mods.json');
const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

const outputDir = path.join(__dirname, '../pages');
const outputFilePath = (slug) => path.join(outputDir, slug, 'icon.v2.png');

// Generate an icon from the provided image parts
const generateIcon = async (filePaths, slug) => {
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

    const outputPath = outputFilePath(slug);
    const finalImage = await baseImage.composite(compositeImages).png().toFile(outputPath);
    console.log(chalk.green(`✅ Icon for ${slug} generated successfully at ${outputPath}`));
    return finalImage;
  } catch (error) {
    console.error(chalk.red(`❌ Error generating icon for ${slug}:`, error));
  }
};

console.log(chalk.blue('🔄 Starting icon generation process...'));

const promises = [];

for (const mod of modsData) {
  if (mod.page.icon) {
    promises.push(generateIcon(mod.page.icon, mod.slug));
  }
}

Promise.all(promises).then(() => {
  console.log(chalk.green(`✅ Generated ${promises.length} icons successfully.`));
}).catch((error) => {
  console.error(chalk.red('❌ Error during icon generation process:', error));
});
