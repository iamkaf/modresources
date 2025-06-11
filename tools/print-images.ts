/**
 * 🖼️ Lists image URLs for each mod.
 *
 * Scans the `pages` directory for PNG files and prints a raw GitHub URL for each
 * one. Optionally pass a mod slug to list only its images.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Base URL for raw GitHub content
const githubBaseURL = 'https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages';

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the 'pages' directory containing mod folders, relative to the current script's directory
const pagesDir = path.join(__dirname, '../pages');

// Get command-line argument for a specific mod folder, if provided
const specificMod = process.argv[2];

// Function to list images and generate URLs
function generateImageURLs(modFolder) {
  const modPath = path.join(pagesDir, modFolder);

  // Check if the item is a directory
  if (fs.statSync(modPath).isDirectory()) {
    // Find .png files in the directory
    const images = fs.readdirSync(modPath).filter((file) => file.endsWith('.png'));

    // Skip mods with no images
    if (images.length === 0) return;

    console.log(chalk.bold.underline(`\nMod: ${chalk.blue(modFolder)}`));
    console.log(chalk.green('Images:'));

    // Print URLs for each image found, indented and colored for readability
    images.forEach((image) => {
      const imageUrl = `${githubBaseURL}/${modFolder}/${image}`;
      console.log(`  ${chalk.yellow('-')} ${chalk.cyan(imageUrl)}`);
    });
  }
}

// Run the function for either a specific mod or all mods
if (specificMod) {
  const specificModPath = path.join(pagesDir, specificMod);
  if (!fs.existsSync(specificModPath) || !fs.statSync(specificModPath).isDirectory()) {
    console.warn(chalk.red(`Warning: The specified mod folder "${specificMod}" does not exist.`));
    process.exit(1);
  } else {
    generateImageURLs(specificMod);
  }
} else {
  fs.readdirSync(pagesDir).forEach((modFolder) => {
    generateImageURLs(modFolder);
  });
}
