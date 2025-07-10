/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VersionDependency = {
  /**
   * The ID of the version that this version depends on
   */
  version_id?: string | null;
  /**
   * The ID of the project that this version depends on
   */
  project_id?: string | null;
  /**
   * The file name of the dependency, mostly used for showing external dependencies on modpacks
   */
  file_name?: string | null;
  /**
   * The type of dependency that this version has
   */
  dependency_type: 'required' | 'optional' | 'incompatible' | 'embedded';
};
