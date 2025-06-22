# Mod Resources 💾

Shared assets and tools used across [@iamkaf](https://modrinth.com/user/iamkaf) mods.
All helper utilities are written in TypeScript and executed with [tsx](https://github.com/esbuild-kit/tsx).

## Directories

- `gradle` ⚙️  - Common Gradle build scripts for multi-loader projects.
- `pages` 📄 - Generated README files and images for each mod.
- `tools` 🛠️ - Scripts for building pages, icons and more.
- `ui` 💻 - React front-end project.

## Scripts

- `npm run pages` 📄 - Build README pages using both schemas.
- `npm run pagesv2` 🆕 - Build pages with `mods.v2.json` only.
- `npm run images` 🖼️ - List URLs of images for each mod.
- `npm run pad` 📝 - Convert `scratchpad.md` to a JSON string.
- `npm run upload` ☁️ - Upload a page to Modrinth and open its CurseForge editor.
- `npm run icon` 🎨 - Generate icon images from parts.
- `npm run validate` ✅ - Validate `mods.v2.json` contents.
- `npm run othermods` 🛠️ - Generate a promo snippet listing all mods.
- `npm run api` 🌐 - Start a local API server backed by `mods.v2.json`.
- `npm run ui` 💻 - Launch the React frontend in `ui/`.

Enjoy the mods! 🚀
