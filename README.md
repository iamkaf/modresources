# Mod Resources 💾

Shared assets and tools used across [@iamkaf](https://modrinth.com/user/iamkaf) mods.
All helper utilities are written in TypeScript and executed with [tsx](https://github.com/esbuild-kit/tsx).

## Directories

- `gradle` ⚙️  - Common Gradle build scripts for multi-loader projects.
- `pages` 📄 - Generated README files and images for each mod.
- `tools` 🛠️ - Scripts for building pages, icons and more.

## Scripts

- `npm run pages` 📄 - Build README pages using both schemas.
- `npm run pagesv2` 🆕 - Build pages with `mods.v2.json` only.
- `npm run images` 🖼️ - List URLs of images for each mod.
- `npm run pad` 📝 - Convert `scratchpad.md` to a JSON string.
- `npm run upload` ☁️ - Upload a page to Modrinth and open its CurseForge editor.
- `npm run icon` 🎨 - Generate icon images from parts.
- `npm run validate` ✅ - Validate `mods.v2.json` contents.
- `npm run othermods` 🛠️ - Generate a promo snippet listing all mods.
- `npm run ui` 💻 - Start the local React interface and API. The UI is built
  with React, Tailwind and DaisyUI and lets you edit entries in `mods.v2.json`.

Enjoy the mods! 🚀
