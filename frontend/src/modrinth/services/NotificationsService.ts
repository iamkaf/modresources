/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get user's notifications
     * @param idUsername The ID or username of the user
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public getUserNotifications(
        idUsername: string,
    ): CancelablePromise<Array<Notification>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id|username}/notifications',
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
     * Get notification from ID
     * @param id The ID of the notification
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public getNotification(
        id: string,
    ): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Mark notification as read
     * @param id The ID of the notification
     * @returns void
     * @throws ApiError
     */
    public readNotification(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/notification/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Delete notification
     * @param id The ID of the notification
     * @returns void
     * @throws ApiError
     */
    public deleteNotification(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notification/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get multiple notifications
     * @param ids The IDs of the notifications
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public getNotifications(
        ids: string,
    ): CancelablePromise<Array<Notification>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Mark multiple notifications as read
     * @param ids The IDs of the notifications
     * @returns void
     * @throws ApiError
     */
    public readNotifications(
        ids: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/notifications',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Delete multiple notifications
     * @param ids The IDs of the notifications
     * @returns void
     * @throws ApiError
     */
    public deleteNotifications(
        ids: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notifications',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
}
