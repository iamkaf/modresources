/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionDependency } from './VersionDependency';
export type BaseVersion = {
  /**
   * The name of this version
   */
  name?: string;
  /**
   * The version number. Ideally will follow semantic versioning
   */
  version_number?: string;
  /**
   * The changelog for this version
   */
  changelog?: string | null;
  /**
   * A list of specific versions of projects that this version depends on
   */
  dependencies?: Array<VersionDependency>;
  /**
   * A list of versions of Minecraft that this version supports
   */
  game_versions?: Array<string>;
  /**
   * The release channel for this version
   */
  version_type?: 'release' | 'beta' | 'alpha';
  /**
   * The mod loaders that this version supports. In case of resource packs, use "minecraft"
   */
  loaders?: Array<string>;
  /**
   * Whether the version is featured or not
   */
  featured?: boolean;
  status?: 'listed' | 'archived' | 'draft' | 'unlisted' | 'scheduled' | 'unknown';
  requested_status?: 'listed' | 'archived' | 'draft' | 'unlisted' | null;
};
