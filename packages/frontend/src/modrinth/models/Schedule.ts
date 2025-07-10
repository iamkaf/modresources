/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Schedule = {
  time: string;
  /**
   * The requested status when scheduling the project for release
   */
  requested_status: 'approved' | 'archived' | 'unlisted' | 'private' | 'draft';
};
