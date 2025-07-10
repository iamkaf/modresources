/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseProject } from './BaseProject';
export type ServerRenderedProject = BaseProject & {
  /**
   * The project type of the project
   */
  project_type: 'mod' | 'modpack' | 'resourcepack' | 'shader';
  /**
   * The total number of downloads of the project
   */
  downloads: number;
  /**
   * The URL of the project's icon
   */
  icon_url?: string | null;
  /**
   * The RGB color of the project, automatically generated from the project icon
   */
  color?: number | null;
  /**
   * The ID of the moderation thread associated with this project
   */
  thread_id?: string;
  monetization_status?: 'monetized' | 'demonetized' | 'force-demonetized';
};
