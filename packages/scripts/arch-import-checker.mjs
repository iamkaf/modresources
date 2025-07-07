import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const targetPath = process.argv[2];

if (!targetPath) {
  console.error(chalk.red('Please provide an absolute path.'));
  process.exit(1);
}

if (!path.isAbsolute(targetPath)) {
  console.error(chalk.red('Please provide an absolute path.'));
  process.exit(1);
}

function getJavaFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getJavaFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.java')) {
      files.push(full);
    }
  }
  return files;
}

function hasArchitecturyImport(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return /import\s+dev\.architectury\./.test(content);
}

const javaFiles = getJavaFiles(targetPath);
const matches = javaFiles.filter(hasArchitecturyImport);

if (matches.length > 0) {
  matches.forEach(f => console.log(chalk.yellow(f)));
} else {
  console.log(chalk.green('All Good!'));
}
