/**
 * 📝 Converts `scratchpad.md` into a JSON-safe string.
 *
 * Replaces Discord-style `:emoji:` tags with their Unicode equivalents,
 * escapes special characters for JSON, and copies the result to the clipboard.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
// import * as emoji from 'node-emoji'; // Emoji replacement temporarily disabled

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the scratchpad.md file
const scratchpadPath = path.join(__dirname, 'scratchpad.md');

// Function to escape content for JSON. Emoji replacement is currently disabled
// until the dependency issue is resolved.
const sanitizeAndFormatContent = (content) => {
  const withoutEmojis = content; // placeholder when emoji conversion returns

  // Escape for JSON
  return withoutEmojis
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\n/g, '\\n') // Escape newlines
    .replace(/\r/g, ''); // Remove carriage returns
};

// Read the scratchpad.md file
try {
  const content = fs.readFileSync(scratchpadPath, 'utf-8');
  const processedContent = sanitizeAndFormatContent(content);

  // Copy the JSON string to the clipboard
  clipboardy.writeSync(`"${processedContent}"`);

  console.log(chalk.bold.green('✔ Successfully processed the scratchpad.md content.\n'));
  console.log(chalk.cyan('JSON String:\n'));
  console.log(chalk.magenta(`"${processedContent}"`));
  console.log(chalk.bold.blue('\nThe JSON string has been copied to your clipboard!'));
} catch (error) {
  console.error(chalk.bold.red('Error reading or processing scratchpad.md:'), error.message);
}
