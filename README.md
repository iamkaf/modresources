# Mod Resources 💾

Shared assets and tools used across [@iamkaf](https://modrinth.com/user/iamkaf) mods.

## Project Structure

This project is organized as a pnpm monorepo, with different components residing in their respective packages:

- `packages/frontend` 💻 - The React UI application for managing mod resources. This includes the main application source code, public assets, and frontend-specific configurations.
- `packages/scripts` 📜 - A collection of Node.js/TypeScript helper scripts for automation tasks, such as generating API clients, event reports, and managing Moddy artifacts.

Other top-level directories:

- `gradle` ⚙️ - Common Gradle build scripts for multi-loader projects. This directory is referenced in deployed projects and should be considered **read only**.
- `maven` 📦 - Maven artifacts used by deployed projects. The contents are also **read only**.
- `moddy` 🤖 - Version registry and source code for Moddy, my code template assistant.
- `pages` 📄 - Generated README files and images for each mod.
- `assets/icon-parts` 🖼️ - Layered images used when generating icons.
- `docs` 📚 - Extra markdown notes.
- `packages/frontend/server.ts` 🌐 - The Express API server that powers the React UI and exposes helper endpoints.

## Scripts

All scripts are run using `pnpm`. You can run scripts for specific packages using `pnpm --filter <package-name> <script-name>` or run root-level scripts directly.

- `pnpm install` - Install all dependencies for all packages in the monorepo.
- `pnpm dev:concurrent` 💻 - Start both the React development server (frontend) and the Express API server (backend) concurrently.
- `pnpm build` ✅ - Build all production-ready artifacts for the monorepo (currently, this builds the frontend application).
- `pnpm lint` 🔍 - Run ESLint across all applicable files in the monorepo.
- `pnpm test` 🧪 - Execute unit tests for all packages with Vitest.
- `pnpm format` 💅 - Format code across the entire project using Prettier.

### Package-Specific Scripts (`packages/scripts`)

These scripts are located in the `packages/scripts` directory and can be run using `pnpm --filter @modresources/scripts <script-name>`:

- `generate:modrinth` 🛠️ - Build a fully-typed Modrinth API client under `packages/frontend/src/modrinth`.
- `generate:moddy <patch|minor|major> [notes...]` 🛠️ - Creates a new Moddy artifact and adds it to the registry. Pass `--dry-run` to test without writing files.
- `generate:fabric-event-report [-- --limit <n>]` 📚 - Generate AI-powered documentation for Fabric API events. When run with `-- --limit <n>`, processes only the first <n> events and writes timestamped partial reports to `tmp-event-summaries/`. Without `--limit`, overwrites `docs/fabric-events-summary.md`.
- `generate:neoforge-event-report [-- --limit <n>]` 📚 - Generate AI-powered documentation for NeoForge events. Same behavior: use `-- --limit <n>` for partial reports in `tmp-event-summaries/`, no limit overwrites `docs/neoforge-events-summary.md`.
- `generate:forge-event-report [-- --limit <n>]` 📚 - Generate AI-powered documentation for MinecraftForge events. Same behavior: use `-- --limit <n>` for partial reports in `tmp-event-summaries/`, no limit overwrites `docs/forge-events-summary.md`.
- `generate:full-event-report [-- --limit <n>]` 📚 - Run Fabric, NeoForge, and Forge event-report scripts in sequence. Pass `-- --limit <n>` to apply a per-script limit.
- `setup:moddy-testing-template` 🧪 - Clones the `multiloader-template` repository into `moddy/testing-template` for Moddy setup verification.
- `cleanup:moddy-testing-template` 🧹 - Removes the `moddy/testing-template` directory.

All event-report scripts detect WSL environments and unload AI models to free VRAM when complete.

## Starting the UI

First, install dependencies:

```bash
pnpm install
```

Then, launch the interface and API server:

```bash
pnpm dev:concurrent
```

This starts the React dev server (typically at `http://localhost:5173`) and the API on `http://localhost:3001`.

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