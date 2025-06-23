/**
 * 📄 Builds README pages using the legacy `mods.json` schema.
 *
 * The script loads template fragments from `pages/common`, injects data from
 * `mods.json`, and writes a final `README.md` to each mod's folder. It supports
 * generating a single mod via `--mod` or all mods at once.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import yargs from 'yargs';
const replacePlaceholders = (template: string, data: Record<string, string>) =>
  template.replace(/{{([^{}]+)}}/g, (_, key) => data[key.trim()] ?? '');

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to important files and directories
const modsJsonPath = path.join(__dirname, '../mods.json');
const templatePath = path.join(__dirname, '../pages/common/template.md');
const outputDir = path.join(__dirname, '../pages');

// Magic strings
const NO_DEPENDENCY_BADGE =
  '[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)';
const DEFAULT_COMPATIBILITY = 'Let me know if you find any issues.';
const DEFAULT_PLAN =
  'The development plan is to make the mod more customizable and update it to the latest versions of Minecraft. If you have any requests for features or mod compats let me know.';
const NO_CREDITS_AVAILABLE = 'No credits available.';

// Read the mods.json file
const readModsJson = () => JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

// Function to generate content for a mod
const generateContentForMod = (mod) => {
  const placeholders = {
    amber_badge: mod.page.no_dependency ? '' : NO_DEPENDENCY_BADGE,
    mod_name: mod.page.mod_name || '',
    mod_header: mod.page.mod_header
      ? `![${mod.page.mod_name} banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.slug}/${mod.page.mod_header})\n\n`
      : '',
    mod_description: mod.page.mod_description || '',
    mod_dependencies: mod.page.mod_dependencies || '',
    mod_extra: mod.page.mod_extra || '',
    mod_how_to_use: mod.page.mod_how_to_use || '',
    mod_compatibility: mod.page.mod_compatibility || DEFAULT_COMPATIBILITY,
    mod_current_plan: mod.page.mod_current_plan || DEFAULT_PLAN,
    mod_extra_extra: mod.page.mod_extra_extra || '',
    mod_roadmap: mod.page.mod_roadmap
      ? `#### Roadmap\n\n${mod.page.mod_roadmap.map((item) => `- ${item}`).join('\n')}`
      : '',
    mod_additional: mod.page.mod_additional || '',
    mod_pictures: mod.page.mod_pictures
      ? mod.page.mod_pictures.map((pic) => `![${pic.alt}](${pic.url})`).join('\n\n')
      : '',
    mod_credits: mod.page.mod_credits
      ? mod.page.mod_credits.map((credit) => `- ${credit}`).join('\n')
      : NO_CREDITS_AVAILABLE,
  };

  const template = fs.readFileSync(templatePath, 'utf-8');
  return replacePlaceholders(template, placeholders);
};

// Function to generate content and write it to file
const processMod = (mod) => {
  const outputFilePath = path.join(outputDir, mod.slug, 'README.md');

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

  const modsData = readModsJson();
  let generatedContent = generateContentForMod(mod);
  generatedContent += '\n\n## Check out my other mods!\n\n';
  const promoList = generatePromoInfo(modsData, mod);

  for (const promo of promoList) {
    // add icon with link
    generatedContent += `<a href="${promo.url}"><img src="${promo.icon}" alt="${promo.name}" width="100"></a>`;
  }

  // Write the generated content to the file
  fs.writeFileSync(outputFilePath, generatedContent, 'utf-8');

  console.log(chalk.green('✔') + chalk.bold(` Generated ${outputFilePath}`));
};

const generatePromoInfo = (modsData, currentMod) => {
  const result = [];

  for (const mod of modsData) {
    // if (mod.slug === currentMod.slug) {
    //   continue;
    // }

    const addV2Icon = !!mod.page.icon;

    result.push({
      name: mod.name,
      icon: `https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.slug}/icon${addV2Icon ? '.v2' : ''}.png`,
      url: `https://modrinth.com/mod/${mod.slug}`,
    });
  }

  return result;
};

// Parse command-line arguments
const argv = yargs(process.argv.slice(2)).command('<mod>', 'Generate the markdown for a specific mod').help().argv;

// Check if a specific mod name is provided as an argument
if (argv.mod) {
  const modsData = readModsJson();
  const specificMod = modsData.find((mod) => mod.name === argv.mod);
  if (!specificMod) {
    console.error(chalk.red(`Mod "${argv.mod}" not found.`));
    process.exit(1);
  }

  // Generate content for the specific mod
  processMod(specificMod);

  console.log(`${chalk.cyan('→')} ${chalk.bold(argv.mod)}: ${chalk.magenta(`./pages/${argv.mod}/README.md`)}`);
} else {
  // Process all mods if no specific mod name is provided
  const modsData = readModsJson();
  modsData.forEach((mod) => processMod(mod));

  console.log(chalk.bold.green('\nAll mod pages generated successfully!'));
  modsData.forEach((mod) => {
    console.log(`${chalk.cyan('→')} ${chalk.bold(mod.name)}: ${chalk.magenta(`./pages/${mod.slug}/README.md`)}`);
  });
}
