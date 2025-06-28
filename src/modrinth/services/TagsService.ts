/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryTag } from '../models/CategoryTag';
import type { DonationPlatformTag } from '../models/DonationPlatformTag';
import type { GameVersionTag } from '../models/GameVersionTag';
import type { License } from '../models/License';
import type { LicenseTag } from '../models/LicenseTag';
import type { LoaderTag } from '../models/LoaderTag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of categories
     * Gets an array of categories, their icons, and applicable project types
     * @returns CategoryTag Expected response to a valid request
     * @throws ApiError
     */
    public categoryList(): CancelablePromise<Array<CategoryTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/category',
        });
    }
    /**
     * Get a list of loaders
     * Gets an array of loaders, their icons, and supported project types
     * @returns LoaderTag Expected response to a valid request
     * @throws ApiError
     */
    public loaderList(): CancelablePromise<Array<LoaderTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/loader',
        });
    }
    /**
     * Get a list of game versions
     * Gets an array of game versions and information about them
     * @returns GameVersionTag Expected response to a valid request
     * @throws ApiError
     */
    public versionList(): CancelablePromise<Array<GameVersionTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/game_version',
        });
    }
    /**
     * @deprecated
     * Get a list of licenses
     * Deprecated - simply use SPDX IDs.
     * @returns LicenseTag Expected response to a valid request
     * @throws ApiError
     */
    public licenseList(): CancelablePromise<Array<LicenseTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/license',
        });
    }
    /**
     * Get the text and title of a license
     * @param id The license ID to get the text of
     * @returns License Expected response to a valid request
     * @throws ApiError
     */
    public licenseText(
        id: string,
    ): CancelablePromise<License> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/license/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }
    /**
     * Get a list of donation platforms
     * Gets an array of donation platforms and information about them
     * @returns DonationPlatformTag Expected response to a valid request
     * @throws ApiError
     */
    public donationPlatformList(): CancelablePromise<Array<DonationPlatformTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/donation_platform',
        });
    }
    /**
     * Get a list of report types
     * Gets an array of valid report types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    public reportTypeList(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/report_type',
        });
    }
    /**
     * Get a list of project types
     * Gets an array of valid project types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    public projectTypeList(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/project_type',
        });
    }
    /**
     * Get a list of side types
     * Gets an array of valid side types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    public sideTypeList(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/side_type',
        });
    }
}
