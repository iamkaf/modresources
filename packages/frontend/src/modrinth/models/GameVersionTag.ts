/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GameVersionTag = {
    /**
     * The name/number of the game version
     */
    version: string;
    /**
     * The type of the game version
     */
    version_type: 'release' | 'snapshot' | 'alpha' | 'beta';
    /**
     * The date of the game version release
     */
    date: string;
    /**
     * Whether or not this is a major version, used for Featured Versions
     */
    major: boolean;
};

