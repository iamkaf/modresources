/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditableUser } from '../models/EditableUser';
import type { Project } from '../models/Project';
import type { User } from '../models/User';
import type { UserPayoutHistory } from '../models/UserPayoutHistory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a user
     * @param idUsername The ID or username of the user
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    public getUser(
        idUsername: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id|username}',
            path: {
                'id|username': idUsername,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Modify a user
     * @param idUsername The ID or username of the user
     * @param requestBody Modified user fields
     * @returns void
     * @throws ApiError
     */
    public modifyUser(
        idUsername: string,
        requestBody?: EditableUser,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/{id|username}',
            path: {
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
     * Get user from authorization header
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    public getUserFromAuth(): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get multiple users
     * @param ids The IDs of the users
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    public getUsers(
        ids: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            query: {
                'ids': ids,
            },
        });
    }
    /**
     * Change user's avatar
     * The new avatar may be up to 2MiB in size.
     * @param idUsername The ID or username of the user
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public changeUserIcon(
        idUsername: string,
        requestBody?: Blob,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/{id|username}/icon',
            path: {
                'id|username': idUsername,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `Request was invalid, see given error`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Remove user's avatar
     * @param idUsername The ID or username of the user
     * @returns void
     * @throws ApiError
     */
    public deleteUserIcon(
        idUsername: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/{id|username}/icon',
            path: {
                'id|username': idUsername,
            },
            errors: {
                400: `Request was invalid, see given error`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get user's projects
     * @param idUsername The ID or username of the user
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public getUserProjects(
        idUsername: string,
    ): CancelablePromise<Array<Project>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id|username}/projects',
            path: {
                'id|username': idUsername,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get user's followed projects
     * @param idUsername The ID or username of the user
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public getFollowedProjects(
        idUsername: string,
    ): CancelablePromise<Array<Project>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id|username}/follows',
            path: {
                'id|username': idUsername,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get user's payout history
     * @param idUsername The ID or username of the user
     * @returns UserPayoutHistory Expected response to a valid request
     * @throws ApiError
     */
    public getPayoutHistory(
        idUsername: string,
    ): CancelablePromise<UserPayoutHistory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id|username}/payouts',
            path: {
                'id|username': idUsername,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Withdraw payout balance to PayPal or Venmo
     * Warning: certain amounts get withheld for fees. Please do not call this API endpoint without first acknowledging the warnings on the corresponding frontend page.
     * @param idUsername The ID or username of the user
     * @param amount Amount to withdraw
     * @returns void
     * @throws ApiError
     */
    public withdrawPayout(
        idUsername: string,
        amount: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/{id|username}/payouts',
            path: {
                'id|username': idUsername,
            },
            query: {
                'amount': amount,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
}
