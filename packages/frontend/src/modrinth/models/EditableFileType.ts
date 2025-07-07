/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EditableFileType = {
  /**
   * The hash algorithm of the hash specified in the hash field
   */
  algorithm: string;
  /**
   * The hash of the file you're editing
   */
  hash: string;
  /**
   * The hash algorithm of the file you're editing
   */
  file_type: 'required-resource-pack' | 'optional-resource-pack' | null;
};
