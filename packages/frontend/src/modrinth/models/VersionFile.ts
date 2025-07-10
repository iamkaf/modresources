/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionFileHashes } from './VersionFileHashes';
export type VersionFile = {
  hashes: VersionFileHashes;
  /**
   * A direct link to the file
   */
  url: string;
  /**
   * The name of the file
   */
  filename: string;
  /**
   * Whether this file is the primary one for its version. Only a maximum of one file per version will have this set to true. If there are not any primary files, it can be inferred that the first file is the primary one.
   */
  primary: boolean;
  /**
   * The size of the file in bytes
   */
  size: number;
  /**
   * The type of the additional file, used mainly for adding resource packs to datapacks
   */
  file_type?: 'required-resource-pack' | 'optional-resource-pack' | null;
};
