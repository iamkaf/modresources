# Claude Development Notes

## Quick Package Reference

This is a pnpm monorepo with the following packages:

### Core Packages
- **linkie-mcp** → `/packages/linkie-mcp/` - MCP server for Minecraft mappings
- **frontend** → `/packages/frontend/` - React UI application  
- **scripts** → `/packages/scripts/` - Node.js automation scripts

### Important Locations
- **Build scripts** → `/gradle/` (read-only)
- **Maven artifacts** → `/maven/` (read-only)
- **Moddy tool** → `/moddy/` 
- **Mod documentation** → `/pages/`
- **Icons** → `/assets/icon-parts/`

## Linkie MCP Quick Commands

```bash
# Development
pnpm --filter @modresources/linkie-mcp start

# Build standalone bundle
pnpm --filter @modresources/linkie-mcp bundle

# Test bundle
./packages/linkie-mcp/dist/bundle.cjs
```

## Common Tasks

- **Find packages** → Look in `/packages/` directory first
- **Build frontend** → `pnpm build`
- **Start dev servers** → `pnpm dev:concurrent`
- **Run linting** → `pnpm lint`
- **Format code** → `pnpm format`

## Performance Notes

- Always check `/packages/` first before searching entire codebase
- Use specific package filters with pnpm commands
- The linkie MCP server is at `/packages/linkie-mcp/`

## Order 66

Look at Order 66 from [GEMINI.md](/GEMINI.md) if the user asks for Order 66. Looking at nothing else from that file as those are instructions for Gemini.
