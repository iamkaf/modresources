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

## Starting the UI

Install dependencies first with `npm install`, then launch the interface:

```bash
npm run ui
```

This starts the React dev server (typically at `http://localhost:5173`) and the
API on `http://localhost:3001`.

## API endpoints

While the UI is running, the Express server exposes a few helper endpoints:

- `POST /api/pagesv2` – runs `tools/page-builder.v2.ts` to regenerate pages.
- `GET /api/images?mod=<id>` – executes `tools/print-images.ts` and returns its
  output.  Pass a `mod` query to limit the listing.
- `POST /api/upload` – runs `tools/page-uploader.ts` for the provided `{ id }`
  body.


## Mod loader docs

- [Fabric development guide](https://docs.fabricmc.net/develop/)
- [NeoForged getting started](https://docs.neoforged.net/docs/gettingstarted/)
- [Forge modding for 1.21](https://docs.minecraftforge.net/en/1.21.x/)

Enjoy the mods! 🚀
