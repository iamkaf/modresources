/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Various data relating to the user's payouts status (you can only see your own)
 */
export type UserPayoutData = {
    /**
     * The payout balance available for the user to withdraw (note, you cannot modify this in a PATCH request)
     */
    balance?: number;
    /**
     * The wallet that the user has selected
     */
    payout_wallet?: 'paypal' | 'venmo';
    /**
     * The type of the user's wallet
     */
    payout_wallet_type?: 'email' | 'phone' | 'user_handle';
    /**
     * The user's payout address
     */
    payout_address?: string;
};

