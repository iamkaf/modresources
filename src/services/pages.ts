// Page generation utilities for mod README files and related snippets.
//
// This module exposes helpers for creating Markdown pages using either the
// legacy mods.json schema or the current mods.v2.json format. It also provides
// a function to generate the "other mods" snippet shown on each page.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { ModEntry, readMods } from '../../lib/readMods';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function generatePagesLegacy(modName?: string): void {
  const modsJsonPath = path.join(ROOT, 'mods.json');
  const templatePath = path.join(ROOT, 'pages', 'common', 'template.md');
  const outputDir = path.join(ROOT, 'pages');
  const modsData = JSON.parse(fs.readFileSync(modsJsonPath, 'utf-8'));

  const replacePlaceholders = (template: string, data: Record<string, string>) =>
    template.replace(/{{([^{}]+)}}/g, (_, key) => data[key.trim()] ?? '');

  const generatePromoInfo = (modsData: any[], currentMod: any) => {
    const result: { name: string; icon: string; url: string }[] = [];
    for (const mod of modsData) {
      const addV2Icon = !!mod.page.icon;
      result.push({
        name: mod.name,
        icon: `https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.slug}/icon${addV2Icon ? '.v2' : ''}.png`,
        url: `https://modrinth.com/mod/${mod.slug}`,
      });
    }
    return result;
  };

  const generateContentForMod = (mod: any) => {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const placeholders = {
      amber_badge: mod.page.no_dependency
        ? ''
        : '[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)',
      mod_name: mod.page.mod_name || '',
      mod_header: mod.page.mod_header
        ? `![${mod.page.mod_name} banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.slug}/${mod.page.mod_header})\n\n`
        : '',
      mod_description: mod.page.mod_description || '',
      mod_dependencies: mod.page.mod_dependencies || '',
      mod_extra: mod.page.mod_extra || '',
      mod_how_to_use: mod.page.mod_how_to_use || '',
      mod_compatibility: mod.page.mod_compatibility || 'Let me know if you find any issues.',
      mod_current_plan:
        mod.page.mod_current_plan ||
        'The development plan is to make the mod more customizable and update it to the latest versions of Minecraft. If you have any requests for features or mod compats let me know.',
      mod_extra_extra: mod.page.mod_extra_extra || '',
      mod_roadmap: mod.page.mod_roadmap
        ? `#### Roadmap\n\n${mod.page.mod_roadmap.map((item: string) => `- ${item}`).join('\n')}`
        : '',
      mod_additional: mod.page.mod_additional || '',
      mod_pictures: mod.page.mod_pictures
        ? mod.page.mod_pictures.map((pic: any) => `![${pic.alt}](${pic.url})`).join('\n\n')
        : '',
      mod_credits: mod.page.mod_credits
        ? mod.page.mod_credits.map((credit: string) => `- ${credit}`).join('\n')
        : 'No credits available.',
    } as Record<string, string>;

    let content = replacePlaceholders(template, placeholders);
    content += '\n\n## Check out my other mods!\n\n';
    const promoList = generatePromoInfo(modsData, mod);
    for (const promo of promoList) {
      content += `<a href="${promo.url}"><img src="${promo.icon}" alt="${promo.name}" width="100"></a>`;
    }
    return content;
  };

  const processMod = (mod: any) => {
    const outputFilePath = path.join(outputDir, mod.slug, 'README.md');
    fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
    const content = generateContentForMod(mod);
    fs.writeFileSync(outputFilePath, content, 'utf-8');
    console.log(chalk.green('✔') + chalk.bold(` Generated ${outputFilePath}`));
  };

  if (modName) {
    const mod = modsData.find((m: any) => m.name === modName);
    if (!mod) throw new Error(`Mod "${modName}" not found.`);
    processMod(mod);
  } else {
    modsData.forEach(processMod);
    console.log(chalk.bold.green('\nAll mod pages generated successfully!'));
  }
}

export function generatePagesV2(): void {
  const modsJsonPath = path.join(ROOT, 'mods.v2.json');
  const commonDir = path.join(ROOT, 'pages', 'common');
  const outputDir = path.join(ROOT, 'pages');
  const modsData: ModEntry[] = readMods(modsJsonPath);

  const commonPath = (name: string) => path.join(commonDir, `${name}.md`);
  const outputPath = (mod: ModEntry) => path.join(outputDir, mod.id, 'README.md');

  const BADGES =
    '[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber) ' +
    '[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues) ' +
    '[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB) ' +
    '[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)';

  const generateContent = (mod: ModEntry): string => {
    let result = '';
    for (let i = 0; i < mod.pages.length; i++) {
      const section = mod.pages[i];
      const commonFile = commonPath(section.title);
      if (fs.existsSync(commonFile)) {
        result += fs.readFileSync(commonFile, 'utf-8') + '\n\n';
        continue;
      }
      const heading = '#'.repeat(section.level) + ' ' + section.title + '\n\n';
      let body = section.content;
      if (i === 0) body = BADGES + '\n\n' + body;
      if (/^credits$/i.test(section.title)) {
        if (!body.includes('**Aris**')) {
          body += '\n- And most importantly, **Aris**, for always being there for me.';
        }
      }
      result += heading + body + '\n\n';
    }

    if (!mod.pages.some((s) => s.title.toLowerCase() === 'qna')) {
      const qnaFile = commonPath('qna');
      if (fs.existsSync(qnaFile)) result += fs.readFileSync(qnaFile, 'utf-8') + '\n\n';
    }
    return result;
  };

  for (const mod of modsData) {
    if (!mod.pages || mod.pages.length === 0) continue;
    const content = generateContent(mod);
    fs.mkdirSync(path.dirname(outputPath(mod)), { recursive: true });
    fs.writeFileSync(outputPath(mod), content, 'utf-8');
  }
  console.log(chalk.bold.green('\nAll mod pages generated successfully (v2)!'));
}

export function generateOtherMods(): void {
  const modsPath = path.join(ROOT, 'mods.v2.json');
  const mods: ModEntry[] = readMods(modsPath);
  const lines: string[] = ['## Check out my other mods!\n'];
  for (const mod of mods) {
    const iconUrl = `https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/${mod.id}/icon.v2.png`;
    lines.push(`<a href="${mod.urls?.modrinth ?? '#'}"><img src="${iconUrl}" alt="${mod.name}" width="100"></a>`);
  }
  const outPath = path.join(ROOT, 'pages', 'common', 'othermods.md');
  fs.writeFileSync(outPath, lines.join('\n'), 'utf-8');
  console.log(chalk.green(`✔ Generated ${outPath}`));
}
