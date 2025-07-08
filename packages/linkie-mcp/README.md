# Linkie MCP Server

An adapter for the Linkie API, exposing its functionality as Model Context Protocol (MCP) tools and resources.

## Features

- Search Minecraft mappings (classes, methods, fields).
- Retrieve Minecraft versions and loader-specific dependency info.
- List supported mapping namespaces.
- Fetch source code for Minecraft classes.

## Getting Started

### Prerequisites

- Node.js (LTS)
- pnpm
- A running [Linkie backend](https://github.com/linkie/linkie-web) (default: `http://localhost:8080`)

### Installation

```bash
git clone https://github.com/iamkaf/modresources.git
cd modresources
pnpm install
pnpm --filter @modresources/linkie-mcp build
```

### Running the Server

```bash
pnpm --filter @modresources/linkie-mcp start
```

**Configuration:**
- **Port:** `PORT` environment variable (default: `3000`).
- **Linkie URL:** `--linkie-url <URL>` CLI argument or `LINKIE_BASE_URL` environment variable (default: `http://localhost:8080`).

## API Endpoint

- `POST /mcp`: MCP JSON-RPC endpoint for all requests.

## Development

- **Lint:** `pnpm --filter @modresources/linkie-mcp lint`
- **Type Check:** `pnpm --filter @modresources/linkie-mcp typecheck`

## License

MIT License. See `LICENSE` in monorepo root.