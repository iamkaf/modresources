/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The contents of the message. **Fields will vary depending on message type.**
 */
export type ThreadMessageBody = {
  /**
   * The type of message
   */
  type: 'status_change' | 'text' | 'thread_closure' | 'deleted';
  /**
   * The actual message text. **Only present for `text` message type**
   */
  body?: string;
  /**
   * Whether the message is only visible to moderators. **Only present for `text` message type**
   */
  private?: boolean;
  /**
   * The ID of the message being replied to by this message. **Only present for `text` message type**
   */
  replying_to?: string | null;
  /**
   * The old status of the project. **Only present for `status_change` message type**
   */
  old_status?:
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
   * The new status of the project. **Only present for `status_change` message type**
   */
  new_status?:
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
};
