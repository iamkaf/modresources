/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseProject } from './BaseProject';
import type { ProjectDonationURL } from './ProjectDonationURL';
export type NonSearchProject = BaseProject & {
  /**
   * A long form description of the project
   */
  body?: string;
  /**
   * The status of the project
   */
  status?:
    | 'approved'
    | 'archived'
    | 'rejected'
    | 'draft'
    | 'unlisted'
    | 'processing'
    | 'withheld'
    | 'scheduled'
    | 'private'
    | 'unknown';
  /**
   * The requested status when submitting for review or scheduling the project for release
   */
  requested_status?: 'approved' | 'archived' | 'unlisted' | 'private' | 'draft' | null;
  /**
   * A list of categories which are searchable but non-primary
   */
  additional_categories?: Array<string>;
  /**
   * An optional link to where to submit bugs or issues with the project
   */
  issues_url?: string | null;
  /**
   * An optional link to the source code of the project
   */
  source_url?: string | null;
  /**
   * An optional link to the project's wiki page or other relevant information
   */
  wiki_url?: string | null;
  /**
   * An optional invite link to the project's discord
   */
  discord_url?: string | null;
  /**
   * A list of donation links for the project
   */
  donation_urls?: Array<ProjectDonationURL>;
};
