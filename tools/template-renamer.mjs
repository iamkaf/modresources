/**
 * This script automates the process of renaming directories and updating package names in a Java project template.
 * It performs the following actions:
 *   1. Reads the mod_id and mod_name from the gradle.properties file located in the specified template directory.
 *   2. Renames asset directories in common, fabric, neoforge, forge, and quilt by replacing the "template" folder with the mod_id.
 *   3. Recursively scans Java files in the common, fabric, forge, neoforge, and quilt folders to update the package name 
 *      from "com.iamkaf.template" to "com.iamkaf.<mod_id>".
 *   4. Replaces the contents of README.md with provided markdown (inserting mod_name).
 *   5. In the file common/src/main/java/com/iamkaf/template/Reference.java, replaces all occurrences of "template" with mod_id.
 *   6. Replaces the contents of changelog.md with provided markdown (inserting mod_name and mod_id).
 *   7. Renames the Java package folder in each loader folder (common, fabric, forge, neoforge, quilt) from
 *      common/src/main/java/com/iamkaf/template to common/src/main/java/com/iamkaf/<mod_id>.
 *   8. All operations log messages with timestamps to the console and to /logs/template-renamer.log.
 *   9. Supports a --dry-run flag (using yargs) that simulates the changes without modifying any files.
 *
 * Usage: node script.mjs <path-to-template> [--dry-run]
 */

import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Parse CLI arguments using yargs
const argv = yargs(hideBin(process.argv))
  .option('dry-run', {
    alias: 'd',
    type: 'boolean',
    description: 'Run without making changes',
    default: false,
  })
  .usage('Usage: node $0 <path-to-template> [--dry-run]')
  .argv;

const dryRun = argv['dry-run'];

// Define the log file path (in /logs/template-renamer.log in the cwd)
const logFilePath = path.join(process.cwd(), 'logs', 'template-renamer.log');

// Helper function to log messages with a timestamp to both the console and a log file.
async function logMsg(level, message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
  try {
    await fs.appendFile(logFilePath, logEntry);
  } catch (err) {
    console.error(chalk.red(`Failed to write to log file: ${err}`));
  }

  // Color the message for console output based on log level.
  let coloredMessage;
  switch (level) {
    case 'error':
      coloredMessage = chalk.red(logEntry);
      break;
    case 'success':
      coloredMessage = chalk.green(logEntry);
      break;
    case 'warning':
      coloredMessage = chalk.yellow(logEntry);
      break;
    default:
      coloredMessage = chalk.blue(logEntry);
  }
  console.log(coloredMessage);
}

async function main() {
  // Ensure the logs directory exists
  await fs.mkdir(path.dirname(logFilePath), { recursive: true });
  await logMsg('info', `Starting template renamer${dryRun ? ' in dry-run mode' : ''}.`);

  // Accept the template path as a positional argument.
  const templatePath = argv._[0];
  if (!templatePath) {
    await logMsg('error', 'No template path provided. Usage: node script.mjs <path-to-template> [--dry-run]');
    process.exit(1);
  }
  const baseDir = path.resolve(templatePath);
  await logMsg('info', `Using template directory: ${baseDir}`);

  // Step 1: Read mod_id and mod_name from gradle.properties
  const gradlePath = path.join(baseDir, 'gradle.properties');
  let gradleContent;
  try {
    gradleContent = await fs.readFile(gradlePath, 'utf8');
  } catch (err) {
    await logMsg('error', `Error reading ${gradlePath}: ${err}`);
    process.exit(1);
  }

  // Extract mod_id and mod_name using regular expressions.
  const modIdMatch = gradleContent.match(/^mod_id\s*=\s*(.+)$/m);
  const modNameMatch = gradleContent.match(/^mod_name\s*=\s*(.+)$/m);
  if (!modIdMatch || !modIdMatch[1]) {
    await logMsg('error', 'mod_id not found in gradle.properties');
    process.exit(1);
  }
  if (!modNameMatch || !modNameMatch[1]) {
    await logMsg('error', 'mod_name not found in gradle.properties');
    process.exit(1);
  }
  const modId = modIdMatch[1].trim();
  const modName = modNameMatch[1].trim();
  await logMsg('info', `Found mod_id: ${modId}`);
  await logMsg('info', `Found mod_name: ${modName}`);

  // Step 2: Validate mod_id and mod_name
  if (!/^[a-z]+$/.test(modId)) {
    await logMsg('error', `mod_id "${modId}" is invalid. It must be all lowercase letters with no spaces or symbols.`);
    process.exit(1);
  }
  if (!/^[A-Za-z0-9 ]+$/.test(modName)) {
    await logMsg('error', `mod_name "${modName}" is invalid. It must contain only letters, numbers, and spaces.`);
    process.exit(1);
  }

  const summary = { directories: [], files: [], readme: false, changelog: false, javaPkgRenamed: [] };

  // Step 3: Rename asset directories in common, fabric, neoforge, forge, and quilt
  const dirsToRename = [
    path.join(baseDir, 'common', 'src', 'main', 'resources', 'assets', 'template'),
    path.join(baseDir, 'fabric', 'src', 'main', 'resources', 'assets', 'template'),
    path.join(baseDir, 'neoforge', 'src', 'main', 'resources', 'assets', 'template'),
    path.join(baseDir, 'forge', 'src', 'main', 'resources', 'assets', 'template'),
    path.join(baseDir, 'quilt', 'src', 'main', 'resources', 'assets', 'template'),
  ];

  for (const oldDir of dirsToRename) {
    try {
      await fs.access(oldDir);
      const newDir = path.join(path.dirname(oldDir), modId);
      if (dryRun) {
        await logMsg('success', `[Dry Run] Would rename directory: ${oldDir} -> ${newDir}`);
      } else {
        await fs.rename(oldDir, newDir);
        await logMsg('success', `Renamed directory: ${oldDir} -> ${newDir}`);
      }
      summary.directories.push({ old: oldDir, new: newDir });
    } catch (err) {
      await logMsg('warning', `Directory ${oldDir} not found or could not be accessed. Skipping.`);
    }
  }

  // Step 4: Update Java files in the specified folders (common, fabric, forge, neoforge, quilt)
  async function updateJavaFiles(dir) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await updateJavaFiles(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.java')) {
        try {
          let content = await fs.readFile(fullPath, 'utf8');
          const updatedContent = content.replace(/com\.iamkaf\.template/g, `com.iamkaf.${modId}`);
          if (updatedContent !== content) {
            if (dryRun) {
              await logMsg('success', `[Dry Run] Would update package in file: ${fullPath}`);
            } else {
              await fs.writeFile(fullPath, updatedContent, 'utf8');
              await logMsg('success', `Updated package in file: ${fullPath}`);
            }
            summary.files.push(fullPath);
          }
        } catch (err) {
          await logMsg('error', `Error processing file ${fullPath}: ${err}`);
        }
      }
    }
  }

  const javaDirs = ['common', 'fabric', 'forge', 'neoforge', 'quilt'];
  for (const folder of javaDirs) {
    const folderPath = path.join(baseDir, folder);
    try {
      await fs.access(folderPath);
      await updateJavaFiles(folderPath);
    } catch (err) {
      await logMsg('warning', `Folder ${folderPath} not found. Skipping Java file update in this folder.`);
    }
  }

  // Step 5: Replace the contents of README.md with provided markdown
  const readmePath = path.join(baseDir, 'README.md');
  const readmeContent = `# ${modName} 

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

A new multiloader mod by @iamkaf.
`;
  try {
    if (dryRun) {
      await logMsg('success', `[Dry Run] Would update README.md at ${readmePath}`);
    } else {
      await fs.writeFile(readmePath, readmeContent, 'utf8');
      await logMsg('success', `Updated README.md at ${readmePath}`);
    }
    summary.readme = true;
  } catch (err) {
    await logMsg('error', `Error writing README.md at ${readmePath}: ${err}`);
  }

  // Step 6: Special update for Reference.java in common folder
  const referenceFilePath = path.join(
    baseDir,
    'common',
    'src',
    'main',
    'java',
    'com',
    'iamkaf',
    'template',
    'Reference.java'
  );
  try {
    await fs.access(referenceFilePath);
    let refContent = await fs.readFile(referenceFilePath, 'utf8');
    const updatedRefContent = refContent.replace(/template/g, modId);
    if (updatedRefContent !== refContent) {
      if (dryRun) {
        await logMsg('success', `[Dry Run] Would update Reference.java strings in ${referenceFilePath}`);
      } else {
        await fs.writeFile(referenceFilePath, updatedRefContent, 'utf8');
        await logMsg('success', `Updated Reference.java strings in ${referenceFilePath}`);
      }
      summary.files.push(referenceFilePath);
    }
  } catch (err) {
    await logMsg('warning', `Reference.java not found at ${referenceFilePath}. Skipping special string replacement.`);
  }

  // Step 7: Rename the Java package folders in each loader folder (common, fabric, forge, neoforge, quilt)
  const javaPackageLoaders = ['common', 'fabric', 'forge', 'neoforge', 'quilt'];
  for (const loader of javaPackageLoaders) {
    const javaPackageDir = path.join(baseDir, loader, 'src', 'main', 'java', 'com', 'iamkaf', 'template');
    try {
      await fs.access(javaPackageDir);
      const newJavaPackageDir = path.join(path.dirname(javaPackageDir), modId);
      if (dryRun) {
        await logMsg('success', `[Dry Run] Would rename Java package folder: ${javaPackageDir} -> ${newJavaPackageDir}`);
      } else {
        await fs.rename(javaPackageDir, newJavaPackageDir);
        await logMsg('success', `Renamed Java package folder: ${javaPackageDir} -> ${newJavaPackageDir}`);
      }
      summary.javaPkgRenamed.push({ old: javaPackageDir, new: newJavaPackageDir });
    } catch (err) {
      await logMsg('warning', `Java package folder ${javaPackageDir} not found in loader "${loader}". Skipping package folder rename.`);
    }
  }

  // Step 8: Replace the contents of changelog.md with provided markdown
  const changelogPath = path.join(baseDir, 'changelog.md');
  const changelogContent = `# ${modName} Changelog 

See the full changelog at https://github.com/iamkaf/${modId}/commits/main/ 

## 1.0.0

Initial Release

##`;
  try {
    if (dryRun) {
      await logMsg('success', `[Dry Run] Would update changelog.md at ${changelogPath}`);
    } else {
      await fs.writeFile(changelogPath, changelogContent, 'utf8');
      await logMsg('success', `Updated changelog.md at ${changelogPath}`);
    }
    summary.changelog = true;
  } catch (err) {
    await logMsg('error', `Error writing changelog.md at ${changelogPath}: ${err}`);
  }

  // Step 9: Log a summary of all changes
  await logMsg('info', '📝 Summary of Changes:');
  if (summary.directories.length > 0) {
    await logMsg('info', 'Renamed Directories:');
    summary.directories.forEach(item => {
      logMsg('success', `- ${item.old} -> ${item.new}`);
    });
  } else {
    await logMsg('warning', 'No directories were renamed.');
  }
  if (summary.files.length > 0) {
    await logMsg('info', 'Updated Java Files:');
    summary.files.forEach(file => {
      logMsg('success', `- ${file}`);
    });
  } else {
    await logMsg('warning', 'No Java files needed updating.');
  }
  if (summary.readme) {
    await logMsg('success', 'README.md was updated.');
  }
  if (summary.changelog) {
    await logMsg('success', 'changelog.md was updated.');
  }
  if (summary.javaPkgRenamed.length > 0) {
    await logMsg('success', 'Renamed Java package folders:');
    summary.javaPkgRenamed.forEach(pkg => {
      logMsg('success', `- ${pkg.old} -> ${pkg.new}`);
    });
  }
}

main().catch(async err => {
  await logMsg('error', `Unexpected error: ${err}`);
  process.exit(1);
});
