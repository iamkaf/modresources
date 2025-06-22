export interface PageSection {
  title: string;
  level: number;
  content: string;
}

export interface Dependency {
  name: string;
  loader: 'fabric' | 'forge' | 'neoforge' | 'all';
  modrinthUrl: string;
  curseforgeUrl: string;
  notes?: string;
}

export interface ModEntry {
  id: string;
  name: string;
  icon?: string[];
  ids?: {
    modrinth?: string;
    curseforge?: string;
  };
  urls?: {
    modrinth?: string;
    curseforge?: string;
    source?: string;
    issues?: string;
    support?: string;
    discord?: string;
  };
  dependencies: Dependency[];
  pages: PageSection[];
}

