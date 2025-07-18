/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModifyTeamMemberBody } from '../models/ModifyTeamMemberBody';
import type { TeamMember } from '../models/TeamMember';
import type { UserIdentifier } from '../models/UserIdentifier';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a project's team members
   * @param idSlug The ID or slug of the project
   * @returns TeamMember Expected response to a valid request
   * @throws ApiError
   */
  public getProjectTeamMembers(idSlug: string): CancelablePromise<Array<TeamMember>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/project/{id|slug}/members',
      path: {
        'id|slug': idSlug,
      },
      errors: {
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
  /**
   * Get a team's members
   * @param id The ID of the team
   * @returns TeamMember Expected response to a valid request
   * @throws ApiError
   */
  public getTeamMembers(id: string): CancelablePromise<Array<TeamMember>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/team/{id}/members',
      path: {
        id: id,
      },
    });
  }
  /**
   * Add a user to a team
   * @param id The ID of the team
   * @param requestBody User to be added (must be the ID, usernames cannot be used here)
   * @returns void
   * @throws ApiError
   */
  public addTeamMember(id: string, requestBody?: UserIdentifier): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/team/{id}/members',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Incorrect token scopes or no authorization to access the requested item(s)`,
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
  /**
   * Get the members of multiple teams
   * @param ids The IDs of the teams
   * @returns TeamMember Expected response to a valid request
   * @throws ApiError
   */
  public getTeams(ids: string): CancelablePromise<Array<Array<TeamMember>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/teams',
      query: {
        ids: ids,
      },
    });
  }
  /**
   * Join a team
   * @param id The ID of the team
   * @returns void
   * @throws ApiError
   */
  public joinTeam(id: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/team/{id}/join',
      path: {
        id: id,
      },
      errors: {
        401: `Incorrect token scopes or no authorization to access the requested item(s)`,
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
  /**
   * Modify a team member's information
   * @param id The ID of the team
   * @param idUsername The ID or username of the user
   * @param requestBody Contents to be modified
   * @returns void
   * @throws ApiError
   */
  public modifyTeamMember(id: string, idUsername: string, requestBody?: ModifyTeamMemberBody): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/team/{id}/members/{id|username}',
      path: {
        id: id,
        'id|username': idUsername,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Incorrect token scopes or no authorization to access the requested item(s)`,
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
  /**
   * Remove a member from a team
   * @param id The ID of the team
   * @param idUsername The ID or username of the user
   * @returns void
   * @throws ApiError
   */
  public deleteTeamMember(id: string, idUsername: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/team/{id}/members/{id|username}',
      path: {
        id: id,
        'id|username': idUsername,
      },
      errors: {
        401: `Incorrect token scopes or no authorization to access the requested item(s)`,
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
  /**
   * Transfer team's ownership to another user
   * @param id The ID of the team
   * @param requestBody New owner's ID
   * @returns void
   * @throws ApiError
   */
  public transferTeamOwnership(id: string, requestBody?: UserIdentifier): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/team/{id}/owner',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Incorrect token scopes or no authorization to access the requested item(s)`,
        404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
      },
    });
  }
}
