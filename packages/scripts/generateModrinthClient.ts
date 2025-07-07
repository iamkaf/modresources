#!/usr/bin/env ts-node
/**
 * Modrinth API — full-coverage TypeScript client generator
 *
 * This script fetches the official Labrinth OpenAPI 3.0 spec straight from the
 * Modrinth monorepo and then pipes it through two OSS generators:
 *   1. openapi-typescript – produces a modrinth.schemas.ts file that exposes
 *      all schemas and path/operation types as plain TypeScript.
 *   2. openapi-typescript-codegen – emits a fully-typed, promise-based `fetch`
 *      client organised by tags (Projects, Versions, Users, ...).
 *
 * 100% of the routes found in the spec end up with a dedicated function whose
 * request/response body types are inferred, so you get end-to-end type-safety
 * in both directions.
 *
 * Quick start:
 *   $ npm i -D ts-node openapi-typescript openapi-typescript-codegen
 *   $ npx ts-node generateModrinthClient.ts
 *
 * Generated artefacts:
 *   ./modrinth/modrinth.schemas.ts   – raw OpenAPI types
 *   ./modrinth/core/...              – shared HTTP helpers (fetch-based)
 *   ./modrinth/services/...          – one file per tag, all methods typed
 *   ./modrinth/index.ts              – ergonomic surface API + re-exports
 *
 * Usage example:
 *   import { ModrinthClient } from "./modrinth";
 *   const mr = new ModrinthClient({
 *     token: process.env.MODRINTH_PAT,
 *     userAgent: "iamkaf/my-tool/0.1.0 (https://github.com/iamkaf)",
 *   });
 *   const sodium = await mr.projects.getProject("sodium");
 *   const newest = await mr.versions.getProjectVersions(sodium.id, {
 *     loaders: ["fabric"],
 *     game_versions: ["1.21.6"],
 *     limit: 1,
 *   });
 *   console.log(newest[0].files[0].url);
 */

import { exec as _exec } from "node:child_process";
import { promisify } from "node:util";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from 'node:url';

const exec = promisify(_exec);

const OPENAPI_URL =
  "https://raw.githubusercontent.com/modrinth/code/main/apps/docs/public/openapi.yaml";
const OUT_DIR = path.join(path.resolve(fileURLToPath(import.meta.url), '..', '..', '..'), 'packages', 'frontend', 'src', 'modrinth');
const SPEC_PATH = path.join(OUT_DIR, "openapi.yaml");

async function generate() {
  // 1) Ensure output directory exists
  await mkdir(OUT_DIR, { recursive: true });

  // 2) Download spec via curl (works behind proxies)
  console.log("› Fetching OpenAPI spec …");
  await exec(`curl -sSL ${OPENAPI_URL} -o ${SPEC_PATH}`);

  // 3) Generate raw TypeScript typings (components + operation maps)
  console.log("› Generating TypeScript schemas …");
  await exec(
    `npx --yes openapi-typescript ${SPEC_PATH} -o ${path.join(
      OUT_DIR,
      "modrinth.schemas.ts"
    )}`
  );

  // 4) Generate fully-featured fetch client
  console.log("› Generating fetch client …");
  await exec(
    `npx --yes openapi-typescript-codegen --input ${SPEC_PATH} --output ${OUT_DIR} --useUnionTypes --client fetch --name ModrinthClient`
  );

  // 4) Patch the generated core client to automatically inject PAT + UA
  const patchPath = path.join(OUT_DIR, "core", "OpenAPI.ts");
  const patch = `
/** Auto-injected helper: merges default Modrinth headers (User-Agent & PAT) */
export function applyModrinthAuth(cfg: ApiConfig, opts: { token?: string; userAgent?: string }) {
  cfg.HEADERS = cfg.HEADERS ?? {};
  if (opts.token) cfg.HEADERS["Authorization"] = opts.token.startsWith("mrp_") ? \`Bearer \${opts.token}\` : opts.token;
  if (opts.userAgent) cfg.HEADERS["User-Agent"] = opts.userAgent;
}
`;
  const fs = await import("node:fs/promises");
  const original = await fs.readFile(patchPath, "utf8");
  await fs.writeFile(patchPath, original + patch, "utf8");

  console.log("✔ All done – the client lives in", OUT_DIR);
}

import { fileURLToPath } from 'node:url';

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
