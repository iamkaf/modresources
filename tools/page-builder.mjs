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

// Read the mods.json file
const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

// TODO: allow each project to specify its own template

// Read the template
const template = fs.readFileSync(templatePath, 'utf-8');

const header = (slug, png) => `![${slug} banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${slug}/${png})`;

// Function to generate the content for each mod
const generateContent = (mod) => {
  let content = template;

  // Substitute the placeholders
  content = content.replace(/{{amber_badge}}/g, mod.page.no_dependency ? '' : '[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)');
  content = content.replace(/{{mod_name}}/g, mod.page.mod_name || '');
  content = content.replace(/{{mod_header}}/g, mod.page.mod_header ? header(mod.slug, mod.page.mod_header) + '\n\n' : '');
  content = content.replace(/{{mod_description}}/g, mod.page.mod_description || '');
  content = content.replace(/{{mod_dependencies}}/g, mod.page.mod_dependencies || '');
  content = content.replace(/{{mod_extra}}/g, mod.page.mod_extra || '');
  content = content.replace(/{{mod_how_to_use}}/g, mod.page.mod_how_to_use || '');
  content = content.replace(/{{mod_compatibility}}/g, mod.page.mod_compatibility || 'Let me know if you find any issues.');
  content = content.replace(/{{mod_current_plan}}/g, mod.page.mod_current_plan || 'The development plan is to make the mod more customizable and port it to 1.20.1 and 1.21.4+ and beyond. If you have any requests for features or mod compats let me know.');
  content = content.replace(/{{mod_extra_extra}}/g, mod.page.mod_extra_extra || '');

  // Replace roadmap array with formatted list
  const roadmapList = mod.page.mod_roadmap
    ? mod.page.mod_roadmap.map((item) => `- ${item}`).join('\n')
    : 'No roadmap available.';
  content = content.replace(/{{mod_roadmap}}/g, roadmapList);

  // Replace pictures array with formatted image list
  const picturesList = mod.page.mod_pictures
    ? mod.page.mod_pictures.map((pic) => `![${pic.alt}](${pic.url})`).join('\n\n')
    : 'No pictures available.';
  content = content.replace(/{{mod_pictures}}/g, picturesList);

  if (!mod.page.mod_pictures?.length) {
    content = content.replace(/## Pics\s+/g, '');
  }

  // Replace credits array with formatted list
  const creditsList = mod.page.mod_credits
    ? mod.page.mod_credits.map((credit) => `- ${credit}`).join('\n')
    : 'No credits available.';
  content = content.replace(/{{mod_credits}}/g, creditsList);

  // Remove beta section if the mod is not in beta
  if (mod.page.beta === false) {
    content = content.replace(/## Beta[\s\S]*?(?=\n##|$)/, '');
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
