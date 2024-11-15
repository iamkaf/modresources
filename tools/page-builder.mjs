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

// Read the template
const template = fs.readFileSync(templatePath, 'utf-8');

// Function to generate the content for each mod
const generateContent = (mod) => {
  let content = template;

  // Substitute the placeholders
  content = content.replace(/{{mod_name}}/g, mod.page.mod_name || '');
  content = content.replace(/{{mod_description}}/g, mod.page.mod_description || '');
  content = content.replace(/{{mod_dependencies}}/g, mod.page.mod_dependencies || '');
  content = content.replace(/{{mod_extra}}/g, mod.page.mod_extra || '');
  content = content.replace(/{{mod_how_to_use}}/g, mod.page.mod_how_to_use || '');

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

  // Replace credits array with formatted list
  const creditsList = mod.page.mod_credits
    ? mod.page.mod_credits.map((credit) => `- ${credit}`).join('\n')
    : 'No credits available.';
  content = content.replace(/{{mod_credits}}/g, creditsList);

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
