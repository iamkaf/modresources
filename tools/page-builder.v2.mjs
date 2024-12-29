import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to important files and directories
const modsJsonPath = path.join(__dirname, '../mods.json');
const templateDirectory = path.join(__dirname, '../pages/common');
const outputDir = path.join(__dirname, '../pages');
const templatePath = (templateName) => path.join(templateDirectory, `${templateName}.md`);
const outputPath = (mod) => path.join(outputDir, mod.slug, 'README.md');

const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

const join = (val) => Array.isArray(val) ? val.join('\n') : val;

function generateContent(mod) {
  let result = '';

  for (const key in mod.pagev2) {
    const templateName = key;
    const templateSubstitutions = mod.pagev2[key];

    try {
      const templateContent = fs.readFileSync(templatePath(templateName), 'utf-8');

      const content = templateContent.replace(/{{([^{}]*)}}/g, (match, key) => {
        return join(templateSubstitutions[key.trim()] ?? '');
      });

      result += content + '\n\n';
    } catch (err) {
      console.error(chalk.red(`✘ Error reading template file ${templatePath(templateName)}: ${err.message}`));
    }
  }

  return result;
}

for (const mod of modsData) {
  if (!mod.pagev2) {
    continue;
  }

  // Generate content with substitutions
  const content = generateContent(mod);

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputPath(mod)), { recursive: true });

  // Write the generated content to the file
  fs.writeFileSync(outputPath(mod), content, 'utf-8');

  // console.log(chalk.green('✔') + chalk.bold(` Generated ${outputPath(mod)}`));
}

console.log(chalk.bold.green('\nAll mod pages generated successfully (v2)!'));
modsData.filter(mod => mod.pagev2).forEach((mod) => {
  console.log(`${chalk.cyan('→')} ${chalk.bold(mod.name)}: ${chalk.magenta(`./pages/${mod.slug}/README.md`)}`);
});
