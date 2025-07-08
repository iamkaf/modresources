import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';
import { z } from 'zod';

let LINKIE_BASE_URL = process.env.LINKIE_BASE_URL || 'http://localhost:8080';

// Parse CLI arguments for --linkie-url
const linkieUrlArgIndex = process.argv.indexOf('--linkie-url');
if (linkieUrlArgIndex > -1 && process.argv.length > linkieUrlArgIndex + 1) {
  LINKIE_BASE_URL = process.argv[linkieUrlArgIndex + 1];
}

// Create an MCP server instance
const server = new McpServer({
  name: 'LinkieMCPAdapter',
  version: '1.0.0',
});

// Register MCP Tools
server.registerTool(
  'linkie_search_mappings',
  {
    title: "Search Minecraft Mappings",
    description: "Searches for Minecraft class, method, and field mappings across different mapping systems (Mojang, Yarn, MCP, Quilt). Use this tool to find what a class/method/field is called in different mappings, or to check if something exists. For example, 'DrawContext' doesn't exist in Mojang mappings but 'GuiGraphics' does. Essential for Minecraft mod development to translate between readable names and obfuscated bytecode identifiers. IMPORTANT: Use this tool whenever mapping namespaces like 'mojang' or 'yarn' are mentioned, as these are the core mapping systems this tool handles. When asking 'What's X in Y mappings?', use namespace=X's_current_mapping_system and translate=Y to find what X is called in Y mappings. For example, 'What's Level in yarn?' means search namespace=mojang (or wherever Level comes from) and translate=yarn to see what Level is called in Yarn mappings.",
    inputSchema: {
      namespace: z.string().describe('The mapping system to search ("mojang" for official mappings, "yarn" for Fabric, "mcp" for Forge legacy, "quilt_mappings" for Quilt).'),
      query: z.string().describe('Search term for class/method/field name (e.g., "Block", "PlayerEntity#tick", "setBlockState").'),
      version: z.string().optional().describe('Specific Minecraft version to search (e.g., "1.20.4", "1.19.2"). If omitted, searches across all versions.'),
      limit: z.number().int().optional().describe('Maximum number of mapping results to return (1-1000, default varies by API).'),
      allowClasses: z.boolean().optional().describe('Include class name mappings in search results.'),
      allowMethods: z.boolean().optional().describe('Include method name mappings in search results.'),
      allowFields: z.boolean().optional().describe('Include field name mappings in search results.'),
      translate: z.string().optional().describe('Target mapping namespace to translate TO. When user asks "What\'s X in Y mappings?", set this to Y. For example, if user asks "What\'s Level in yarn?", set translate=yarn to see what Level is called in Yarn mappings. This parameter specifies the OUTPUT mapping system you want to see the results in.'),
      translateMode: z.string().optional().describe('Translation mode: "ns" for namespace-based, "ver" for version-based translation.'),
    },
  },
  async (params) => {
    const namespacesResponse = await axios.get(`${LINKIE_BASE_URL}/api/namespaces`);
    const validNamespaces = namespacesResponse.data.map((ns: any) => ns.id);

    if (!validNamespaces.includes(params.namespace)) {
      throw new Error(`Invalid namespace: "${params.namespace}". Valid namespaces are: ${validNamespaces.join(', ')}`);
    }

    if (params.limit !== undefined && (params.limit < 1 || params.limit > 1000)) {
      throw new Error(`Invalid limit: "${params.limit}". Limit must be between 1 and 1000.`);
    }

    if (params.translate !== undefined && params.translateMode !== undefined && params.translateMode !== "" && !["ns", "ver"].includes(params.translateMode)) {
      throw new Error(`Invalid translateMode: "${params.translateMode}". Must be "ns" or "ver".`);
    }

    if (params.translate !== undefined && (params.translateMode === undefined || params.translateMode === "")) {
      params.translateMode = "ns"; // Default to "ns" if translate is provided but mode is not or is empty
    }

    try {
      const searchResponse = await axios.get(`${LINKIE_BASE_URL}/api/search`, { params });

      const mapLinkieEntry = (entry: any) => {
        const mappedEntry: any = {};
        for (const key in entry) {
          switch (key) {
            case 'o': mappedEntry.obfuscated = entry[key]; break;
            case 'i': mappedEntry.intermediary = entry[key]; break;
            case 'n': mappedEntry.named = entry[key]; break;
            case 'h': mappedEntry.obfuscatedClient = entry[key]; break;
            case 'l': 
              // Handle both obfuscatedServer and translated based on value type
              if (typeof entry[key] === 'object' && entry[key] !== null) {
                // This 'l' is for translated entry (object)
                mappedEntry.translated = mapLinkieEntry(entry[key]);
              } else {
                // This 'l' is for obfServer in ClassEntry (string)
                mappedEntry.obfuscatedServer = entry[key];
              }
              break;
            case 'z': mappedEntry.score = entry[key]; break;
            case 't': mappedEntry.memberType = entry[key]; break;
            case 'a': mappedEntry.ownerObfuscated = entry[key]; break;
            case 'b': mappedEntry.ownerIntermediary = entry[key]; break;
            case 'c': mappedEntry.ownerNamed = entry[key]; break;
            case 'd': mappedEntry.descriptionObfuscated = entry[key]; break;
            case 'e': mappedEntry.descriptionIntermediary = entry[key]; break;
            case 'f': mappedEntry.descriptionNamed = entry[key]; break;
            case 'g': mappedEntry.ownerObfuscatedClient = entry[key]; break;
            case 'j': mappedEntry.descriptionObfuscatedClient = entry[key]; break;
            case 'k': mappedEntry.ownerObfuscatedServer = entry[key]; break;
            case 's': mappedEntry.obfuscatedServer = entry[key]; break; // This 's' is for obfServer in MemberEntry
            case 'p': mappedEntry.parameters = entry[key]; break;
            case 'q': mappedEntry.guessed = entry[key]; break;
            case 'r': mappedEntry.isMojang = entry[key]; break;
            default: mappedEntry[key] = entry[key]; break;
          }
        }
        return mappedEntry;
      };

      const readableData = {
        entries: searchResponse.data.entries.map(mapLinkieEntry),
        fuzzy: searchResponse.data.fuzzy,
      };

      return { content: [{ type: 'text', text: JSON.stringify(readableData, null, 2) }] };
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 500 && error.response.data && error.response.data.error && error.response.data.error.includes('NullPointerException')) {
          throw new Error('Translation failed. The Linkie backend might not support version-based translation for the specified parameters or encountered an internal error.');
        }
        throw new Error(`Linkie API error: ${error.response.status} - ${error.response.statusText}`);
      }
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
);

server.registerTool(
  'linkie_get_versions',
  {
    title: "Get Available Minecraft Versions",
    description: 'Retrieves available Minecraft versions and their mapping data for mod loaders (Fabric, Forge, Quilt). Shows which versions have stable mappings and dependency information for modding projects.',
    inputSchema: {
      loader: z.string().optional().describe('Mod loader platform ("fabric", "forge", "neoforge", "legacy-fabric") or omit for summary of all loaders. Specific loader returns full version list, omitted returns concise overview.'),
    },
  },
  async (params) => {
    let versionsResponse;
    if (params.loader) {
      versionsResponse = await axios.get(`${LINKIE_BASE_URL}/api/versions/${params.loader}`);
    } else {
      versionsResponse = await axios.get(`${LINKIE_BASE_URL}/api/versions`);
    }

    let readableData;
    if (params.loader && params.loader !== "all") {
      // Specific loader, return only version list (much more concise)
      readableData = {
        loader: params.loader,
        versions: Object.keys(versionsResponse.data).sort((a, b) => b.localeCompare(a)) // Sort newest first
      };
    } else {
      // All loaders, return only version counts and sample recent versions
      readableData = Object.entries(versionsResponse.data).map(([loader, versions]: [string, any]) => ({
        loader,
        totalVersions: versions.length,
        latestStable: versions.find((v: any) => v.stable)?.version || null,
        latestVersion: versions[0]?.version || null,
        // Only include a few recent versions to keep response small
        recentVersions: versions.slice(0, 5).map((v: any) => ({
          version: v.version,
          stable: v.stable
        }))
      }));
    }
    return { content: [{ type: 'text', text: JSON.stringify(readableData, null, 2) }] };
  }
);

server.registerTool(
  'linkie_get_namespaces',
  {
    title: "Get Mapping Namespaces",
    description: 'Lists all available mapping systems (namespaces) such as Mojang official mappings, Fabric Yarn, MCP (Mod Coder Pack), and Quilt mappings. Each namespace provides different naming conventions and features for Minecraft modding.',
    inputSchema: {},
  },
  async () => {
    const namespacesResponse = await axios.get(`${LINKIE_BASE_URL}/api/namespaces`);
    const readableData = namespacesResponse.data.map((ns: any) => ({
      id: ns.id,
      totalVersions: ns.versions.length,
      latestStable: ns.versions.find((v: any) => v.stable)?.version || null,
      latestVersion: ns.versions[0]?.version || null,
      recentVersions: ns.versions.slice(0, 3).map((v: any) => ({ version: v.version, stable: v.stable })),
      supportsAT: ns.supportsAT,
      supportsAW: ns.supportsAW,
      supportsMixin: ns.supportsMixin,
      supportsFieldDescription: ns.supportsFieldDescription,
      supportsSource: ns.supportsSource,
    }));
    return { content: [{ type: 'text', text: JSON.stringify(readableData, null, 2) }] };
  }
);

server.registerTool(
  'linkie_get_source',
  {
    title: "Get Deobfuscated Source Code",
    description: 'Retrieves the deobfuscated source code for a specific Minecraft class using the selected mapping system and version. Useful for understanding Minecraft internals and developing mods by viewing readable class implementations.',
    inputSchema: {
      namespace: z.string().describe('The mapping system ("mojang", "yarn", "mcp", "quilt_mappings") to use for deobfuscation.'),
      className: z.string().describe('Full class path with forward slashes (e.g., "net/minecraft/client/MinecraftClient", "net/minecraft/world/level/block/Block").'),
      version: z.string().describe('Target Minecraft version (e.g., "1.20.4", "1.19.2") to get source code for.'),
    },
  },
  async (params) => {
    const namespacesResponse = await axios.get(`${LINKIE_BASE_URL}/api/namespaces`);
    const validNamespaces = namespacesResponse.data.map((ns: any) => ns.id);

    if (!validNamespaces.includes(params.namespace)) {
      throw new Error(`Invalid namespace: "${params.namespace}". Valid namespaces are: ${validNamespaces.join(', ')}`);
    }

    try {
      const sourceResponse = await axios.get(`${LINKIE_BASE_URL}/api/source`, { params: { namespace: params.namespace, version: params.version, class: params.className } });
      return { content: [{ type: 'text', text: sourceResponse.data }] };
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 500) {
          if (error.response.data && typeof error.response.data === 'string') {
            if (error.response.data.includes('No source found for')) {
              throw new Error(`Source code not available for class "${params.className}" in ${params.namespace} ${params.version}`);
            }
            if (error.response.data.includes('No class specified')) {
              throw new Error('Invalid class name specified');
            }
            if (error.response.data.includes('error analyzing') && error.response.data.includes('jtracy')) {
              // User requested a specific version, so try search as fallback instead of suggesting older versions
              try {
                const className = params.className.split('/').pop(); // Extract just the class name
                const searchResponse = await axios.get(`${LINKIE_BASE_URL}/api/search`, { 
                  params: { 
                    namespace: params.namespace, 
                    query: className,
                    version: params.version,
                    allowClasses: true,
                    limit: 5
                  } 
                });
                
                if (searchResponse.data.entries && searchResponse.data.entries.length > 0) {
                  const mapLinkieEntry = (entry: any) => {
                    const mappedEntry: any = {};
                    for (const key in entry) {
                      switch (key) {
                        case 'o': mappedEntry.obfuscated = entry[key]; break;
                        case 'i': mappedEntry.intermediary = entry[key]; break;
                        case 'n': mappedEntry.named = entry[key]; break;
                        case 'h': mappedEntry.obfuscatedClient = entry[key]; break;
                        case 'z': mappedEntry.score = entry[key]; break;
                        case 't': mappedEntry.memberType = entry[key]; break;
                        default: mappedEntry[key] = entry[key]; break;
                      }
                    }
                    return mappedEntry;
                  };
                  
                  const mappedEntries = searchResponse.data.entries.map(mapLinkieEntry);
                  throw new Error(`Source code unavailable for ${params.namespace} ${params.version}. The Linkie backend encountered an issue analyzing dependencies for this version. However, mappings were found for this class:\n\n${JSON.stringify(mappedEntries, null, 2)}`);
                } else {
                  throw new Error(`Source code unavailable for ${params.namespace} ${params.version}. The Linkie backend encountered an issue analyzing dependencies for this version, and no mappings were found for class "${className}" in this version.`);
                }
              } catch (searchError) {
                if (axios.isAxiosError(searchError)) {
                  throw new Error(`Source code unavailable for ${params.namespace} ${params.version}. The Linkie backend encountered an issue analyzing dependencies for this version. Search fallback also failed.`);
                }
                // Re-throw the search error if it's our constructed error message
                throw searchError;
              }
            }
          }
          // Generic 500 error handling
          throw new Error(`Source code unavailable for ${params.namespace} ${params.version}. The Linkie backend may not support source code retrieval for this version or encountered an internal error. Try using the search tool to find specific methods/fields instead.`);
        }
        throw new Error(`Linkie API error: ${error.response.status} - ${error.response.statusText}`);
      }
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
);

// Register MCP Resources
server.registerResource(
  'linkie/mappings',
  'linkie://mappings/{namespace}/{version}',
  {
    title: "Raw Minecraft Mapping Data",
    description: 'Provides complete obfuscation mapping data for a specific mapping system and Minecraft version. Contains all class, method, and field mappings used for mod development.',
    mimeType: 'application/json',
  },
  async (uri) => {
    const pathParts = uri.pathname.split('/');
    const namespace = pathParts[2];
    const version = pathParts[3];

    const namespacesResponse = await axios.get(`${LINKIE_BASE_URL}/api/namespaces`);
    const validNamespaces = namespacesResponse.data.map((ns: any) => ns.id);

    if (!validNamespaces.includes(namespace)) {
      throw new Error(`Invalid namespace: "${namespace}". Valid namespaces are: ${validNamespaces.join(', ')}`);
    }

    if (!version) {
      throw new Error(`Missing version: "version" is a required parameter.`);
    }

    const mappingsResponse = await axios.get(`${LINKIE_BASE_URL}/api/mappings`, { params: { namespace, version } });
    return { contents: [{ uri: uri.href, mimeType: 'application/json', blob: Buffer.from(JSON.stringify(mappingsResponse.data)).toString('base64') }] };
  }
);

server.registerResource(
  'linkie/versions',
  'linkie://versions',
  {
    title: "Minecraft Versions & Loader Info",
    description: 'Comprehensive list of available Minecraft versions with mapping support across different mod loaders (Fabric, Forge, Quilt). Includes stability information and dependency data.',
    mimeType: 'application/json',
  },
  async (uri) => {
    const versionsResponse = await axios.get(`${LINKIE_BASE_URL}/api/versions`);
    const readableData = Object.entries(versionsResponse.data).map(([loader, versions]: [string, any]) => ({
      loader,
      versions: (versions as any[]).map(v => ({
        version: v.version,
        stable: v.stable,
        blocks: v.blocks ? Object.entries(v.blocks).map(([blockName, blockData]: [string, any]) => ({
          name: blockName,
          mavens: blockData.mavens,
          dependencies: blockData.dependencies,
          stable: blockData.stable,
        })) : undefined,
      })),
    }));
    return { contents: [{ uri: uri.href, mimeType: 'application/json', blob: Buffer.from(JSON.stringify(readableData, null, 2)).toString('base64') }] };
  }
);

// Start the stdio server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log(`Linkie MCP server running on stdio`);
  console.log(`Interacting with Linkie backend at ${LINKIE_BASE_URL}`);
}

main().catch(console.error);
