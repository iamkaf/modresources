# Mod Resources 💾

Shared assets and tools used across [@iamkaf](https://modrinth.com/user/iamkaf) mods.
All helper utilities are now exposed through a small Express API that powers the React UI.

## Directories

- `gradle` ⚙️ - Common Gradle build scripts for multi-loader projects. This
  directory is referenced in deployed projects and should be considered
  **read only**.
- `maven` 📦 - Maven artifacts used by deployed projects. The contents are
  also **read only**.
- `moddy` 🤖 - Version registry and source code for Moddy, my code template assistant.
- `pages` 📄 - Generated README files and images for each mod.
- `assets/icon-parts` 🖼️ - Layered images used when generating icons.
- `docs` 📚 - Extra markdown notes.
- `scripts` 📜 - Standalone helper scripts.
- `src/utils` 🧩 - Reusable TypeScript utilities.
- Each mod entry now stores a full `readme` string compiled with
  [Handlebars](https://handlebarsjs.com). Use any field from the mod entry in
  `{{doubleCurlyBraces}}`.
- Common templates live under `pages/common` and can be inserted in the UI
  editor.

## Scripts

- `npm run dev` 💻 - Start the local React interface and API from the repository root. The UI is built
  with React, Tailwind and DaisyUI and lets you edit entries in `mods.v2.json` and run all helper actions.
- `npm run test` ✅ - Execute unit tests with Vitest.
- `npm run lint` 🔍 - Run ESLint across the project.
- `npm run typecheck` 📝 - Type-check the React code using `tsconfig.react.json`.
- `npm run generate:modrinth` 🛠️ - Build a fully-typed Modrinth API client under `src/modrinth`.
- `npm run generate:moddy` 🛠️ - Creates a new Moddy artifact and adds it to the registry. Pass `--dry-run` to test without writing files.

## Starting the UI

Install dependencies first with `npm install`, then launch the interface:

```bash
npm run ui
```

This starts the React dev server (typically at `http://localhost:5173`) and the
API on `http://localhost:3001`.

## API endpoints

While the UI is running, the Express server exposes a few helper endpoints:

- `POST /api/pagesv2` – regenerate README pages.
- `POST /api/icon` – build composite icons.
- `GET /api/images?mod=<id>` – list raw image URLs (optionally for one mod).
- `POST /api/upload` – upload a page to Modrinth.
- `POST /api/validate` – validate `mods.v2.json`.
- `POST /api/othermods` – regenerate the promo snippet.

## Mod loader docs

- [Fabric development guide](https://docs.fabricmc.net/develop/)
- [NeoForged getting started](https://docs.neoforged.net/docs/gettingstarted/)
- [Forge modding for 1.21](https://docs.minecraftforge.net/en/1.21.x/)
- [Porting Primers](https://github.com/neoforged/.github/tree/main/primers)

Enjoy the mods! 🚀
