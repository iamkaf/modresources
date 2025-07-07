/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThreadMessage } from './ThreadMessage';
import type { User } from './User';
export type Thread = {
  /**
   * The ID of the thread
   */
  id: string;
  type: 'project' | 'report' | 'direct_message';
  /**
   * The ID of the associated project if a project thread
   */
  project_id?: string | null;
  /**
   * The ID of the associated report if a report thread
   */
  report_id?: string | null;
  messages: Array<ThreadMessage>;
  members: Array<User>;
};
