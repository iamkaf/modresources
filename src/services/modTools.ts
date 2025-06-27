import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { ModEntry, readMods } from '../../lib/readMods';
import sharp from 'sharp';
import clipboardy from 'clipboardy';
import open from 'open';
import { Validator } from 'jsonschema';
import { config } from 'dotenv';
config();

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Build README pages using the legacy mods.json schema. */
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

/** Generate README pages using mods.v2.json */
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

/** Generate icon images from layers listed in mods.v2.json */
export async function generateIcons(): Promise<void> {
  const modsJsonPath = path.join(ROOT, 'mods.v2.json');
  const modsData: ModEntry[] = readMods(modsJsonPath);
  const outputDir = path.join(ROOT, 'pages');
  const outputFilePath = (id: string) => path.join(outputDir, id, 'icon.v2.png');

  const generateIcon = async (filePaths: string[], id: string) => {
    const images = filePaths.map((p) => sharp(path.join('tools/icon-parts', p)));
    const { width, height } = await images[0].metadata();
    const base = sharp({
      create: { width: width!, height: height!, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    });
    const composite = [] as { input: Buffer }[];
    for (const img of images) composite.push({ input: await img.toBuffer() });
    await base.composite(composite).png().toFile(outputFilePath(id));
    console.log(chalk.green(`✅ Icon for ${id} generated successfully`));
  };

  const promises: Promise<void>[] = [];
  for (const mod of modsData) {
    if (mod.icon) promises.push(generateIcon(mod.icon, mod.id));
  }
  await Promise.all(promises);
  console.log(chalk.green(`✅ Generated ${promises.length} icons successfully.`));
}

/** Upload a README page to Modrinth and open CurseForge */
export async function uploadPage(id: string): Promise<void> {
  const modsPath = path.join(ROOT, 'mods.v2.json');
  const mods: ModEntry[] = readMods(modsPath);
  const mod = mods.find((m) => m.id === id);
  if (!mod) throw new Error(`Mod ${id} not found`);
  if (!mod.ids?.modrinth) throw new Error(`Mod ${id} does not have a Modrinth ID`);

  const modPageMd = fs.readFileSync(path.join(ROOT, 'pages', mod.id, 'README.md'), 'utf-8');
  const payload = { body: modPageMd + `\n\n---\n\n📃 ${new Date().toISOString()}` };

  const apiKey = process.env.MODRINTH_API_KEY;
  if (!apiKey) throw new Error('MODRINTH_API_KEY missing in env');

  const response = await fetch(`https://api.modrinth.com/v2/project/${mod.ids.modrinth}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'User-Agent': "iamkaf's Modrinth Page Uploader (https://github.com/iamkaf/modresources)",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Failed to update project: ${response.statusText}`);

  clipboardy.writeSync(modPageMd);
  if (mod.ids?.curseforge) {
    const url = `https://authors.curseforge.com/#/projects/${mod.ids.curseforge}/description`;
    open(url);
  }
  console.log(chalk.green.bold(`✔ Successfully updated project ${mod.name}`));
}

/** List raw GitHub URLs for images in the pages folder. */
export function listImages(mod?: string): Record<string, string[]> {
  const githubBaseURL = 'https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages';
  const pagesDir = path.join(ROOT, 'pages');
  const result: Record<string, string[]> = {};
  const mods = mod ? [mod] : fs.readdirSync(pagesDir);
  for (const m of mods) {
    const dir = path.join(pagesDir, m);
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) continue;
    const images = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));
    if (images.length) {
      result[m] = images.map((img) => `${githubBaseURL}/${m}/${img}`);
    }
  }
  return result;
}

/** Validate mods.v2.json using a JSON schema. */
export function validateMods(): string {
  const modsPath = path.join(ROOT, 'mods.v2.json');
  const mods: ModEntry[] = readMods(modsPath);
  const schema = {
    type: 'array',
    items: {
      type: 'object',
      required: ['id', 'name', 'pages', 'dependencies'],
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        icon: { type: 'array', items: { type: 'string' } },
        ids: {
          type: 'object',
          properties: {
            modrinth: { type: 'string' },
            curseforge: { type: 'string' },
          },
        },
        urls: {
          type: 'object',
          properties: {
            modrinth: { type: 'string' },
            curseforge: { type: 'string' },
            source: { type: 'string' },
            issues: { type: 'string' },
            support: { type: 'string' },
            discord: { type: 'string' },
          },
        },
        dependencies: {
          type: 'array',
          items: {
            type: 'object',
            required: ['name', 'loader', 'modrinthUrl', 'curseforgeUrl'],
            properties: {
              name: { type: 'string' },
              loader: { enum: ['fabric', 'forge', 'neoforge', 'all'] },
              modrinthUrl: { type: 'string' },
              curseforgeUrl: { type: 'string' },
              notes: { type: 'string' },
            },
          },
        },
        pages: {
          type: 'array',
          items: {
            type: 'object',
            required: ['title', 'level', 'content'],
            properties: {
              title: { type: 'string' },
              level: { type: 'number' },
              content: { type: 'string' },
            },
          },
        },
      },
    },
  };

  const validator = new Validator();
  const result = validator.validate(mods, schema);
  if (result.valid) {
    return `✔ mods.v2.json looks good (${mods.length} mods checked)`;
  }
  const lines = result.errors.map((e) => `✖ ${e.stack}`).join('\n');
  return lines;
}

/** Generate a Markdown snippet listing all mods. */
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

/** Convert scratchpad.md to a sanitized JSON-ready string. */
export function processScratchpad(): string {
  const file = path.join(ROOT, 'tools', 'scratchpad.md');
  const content = fs.readFileSync(file, 'utf-8');
  const sanitized = content
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
  clipboardy.writeSync(`"${sanitized}"`);
  return sanitized;
}
