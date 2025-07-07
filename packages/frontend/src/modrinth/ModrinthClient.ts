/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { MiscService } from './services/MiscService';
import { NotificationsService } from './services/NotificationsService';
import { ProjectsService } from './services/ProjectsService';
import { TagsService } from './services/TagsService';
import { TeamsService } from './services/TeamsService';
import { ThreadsService } from './services/ThreadsService';
import { UsersService } from './services/UsersService';
import { VersionFilesService } from './services/VersionFilesService';
import { VersionsService } from './services/VersionsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ModrinthClient {
    public readonly misc: MiscService;
    public readonly notifications: NotificationsService;
    public readonly projects: ProjectsService;
    public readonly tags: TagsService;
    public readonly teams: TeamsService;
    public readonly threads: ThreadsService;
    public readonly users: UsersService;
    public readonly versionFiles: VersionFilesService;
    public readonly versions: VersionsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.modrinth.com/v2',
            VERSION: config?.VERSION ?? '2.7.0/366f528',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.misc = new MiscService(this.request);
        this.notifications = new NotificationsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.tags = new TagsService(this.request);
        this.teams = new TeamsService(this.request);
        this.threads = new ThreadsService(this.request);
        this.users = new UsersService(this.request);
        this.versionFiles = new VersionFilesService(this.request);
        this.versions = new VersionsService(this.request);
    }
}

