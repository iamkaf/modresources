import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

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
const NO_PICTURES_AVAILABLE = 'No pictures available.';
const NO_CREDITS_AVAILABLE = 'No credits available.';

// Read the mods.json file
const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

// TODO: allow each project to specify its own template

// Read the template
const template = fs.readFileSync(templatePath, 'utf-8');

const replacePlaceholders = (content, placeholders) => {
  for (const [key, value] of Object.entries(placeholders)) {
    content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }
  return content;
};

const header = (name, slug, png) =>
  `![${name} banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${slug}/${png})`;

// Function to generate the content for each mod
const generateContent = (mod) => {
  let content = template;

  const placeholders = {
    amber_badge: mod.page.no_dependency ? '' : NO_DEPENDENCY_BADGE,
    mod_name: mod.page.mod_name || '',
    mod_header: mod.page.mod_header ? header(mod.page.mod_name, mod.slug, mod.page.mod_header) + '\n\n' : '',
    mod_description: mod.page.mod_description || '',
    mod_dependencies: mod.page.mod_dependencies || '',
    mod_extra: mod.page.mod_extra || '',
    mod_how_to_use: mod.page.mod_how_to_use || '',
    mod_compatibility: mod.page.mod_compatibility || DEFAULT_COMPATIBILITY,
    mod_current_plan: mod.page.mod_current_plan || DEFAULT_PLAN,
    mod_extra_extra: mod.page.mod_extra_extra || '',
    mod_roadmap: mod.page.mod_roadmap
      ? '#### Roadmap\n\n\n' + mod.page.mod_roadmap.map((item) => `- ${item}`).join('\n')
      : '',
    mod_pictures: mod.page.mod_pictures
      ? mod.page.mod_pictures.map((pic) => `![${pic.alt}](${pic.url})`).join('\n\n')
      : NO_PICTURES_AVAILABLE,
    mod_credits: mod.page.mod_credits
      ? mod.page.mod_credits.map((credit) => `- ${credit}`).join('\n')
      : NO_CREDITS_AVAILABLE,
  };

  content = replacePlaceholders(content, placeholders);

  if (!mod.page.mod_pictures?.length) {
    content = content.replace(/## Pics\s+/g, '');
  }

  return content;
};

// Process each mod and generate its markdown file
modsData.forEach((mod) => {
  const outputFilePath = path.join(outputDir, mod.slug, 'README.md');

  // Generate content with substitutions
  const content = generateContent(mod);

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

  // Write the generated content to the file
  fs.writeFileSync(outputFilePath, content, 'utf-8');

  console.log(chalk.green('✔') + chalk.bold(` Generated ${outputFilePath}`));
});

console.log(chalk.bold.green('\nAll mod pages generated successfully!'));
modsData.forEach((mod) => {
  console.log(`${chalk.cyan('→')} ${chalk.bold(mod.name)}: ${chalk.magenta(`./pages/${mod.slug}/README.md`)}`);
});
