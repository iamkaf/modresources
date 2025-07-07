/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationAction } from './NotificationAction';
export type Notification = {
    /**
     * The id of the notification
     */
    id: string;
    /**
     * The id of the user who received the notification
     */
    user_id: string;
    /**
     * The type of notification
     */
    type?: 'project_update' | 'team_invite' | 'status_change' | 'moderator_message' | null;
    /**
     * The title of the notification
     */
    title: string;
    /**
     * The body text of the notification
     */
    text: string;
    /**
     * A link to the related project or version
     */
    link: string;
    /**
     * Whether the notification has been read or not
     */
    read: boolean;
    /**
     * The time at which the notification was created
     */
    created: string;
    /**
     * A list of actions that can be performed
     */
    actions: Array<NotificationAction>;
};

