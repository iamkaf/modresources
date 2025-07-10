/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreatableReport = {
  /**
   * The type of the report being sent
   */
  report_type: string;
  /**
   * The ID of the item (project, version, or user) being reported
   */
  item_id: string;
  /**
   * The type of the item being reported
   */
  item_type: 'project' | 'user' | 'version';
  /**
   * The extended explanation of the report
   */
  body: string;
};
