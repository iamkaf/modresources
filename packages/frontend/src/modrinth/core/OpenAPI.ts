/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: 'include' | 'omit' | 'same-origin';
  TOKEN?: string | Resolver<string> | undefined;
  USERNAME?: string | Resolver<string> | undefined;
  PASSWORD?: string | Resolver<string> | undefined;
  HEADERS?: Headers | Resolver<Headers> | undefined;
  ENCODE_PATH?: ((path: string) => string) | undefined;
};

export const OpenAPI: OpenAPIConfig = {
  BASE: 'https://api.modrinth.com/v2',
  VERSION: '2.7.0/366f528',
  WITH_CREDENTIALS: false,
  CREDENTIALS: 'include',
  TOKEN: undefined,
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined,
};

/** Auto-injected helper: merges default Modrinth headers (User-Agent & PAT) */
export function applyModrinthAuth(cfg: ApiConfig, opts: { token?: string; userAgent?: string }) {
  cfg.HEADERS = cfg.HEADERS ?? {};
  if (opts.token) cfg.HEADERS['Authorization'] = opts.token.startsWith('mrp_') ? `Bearer ${opts.token}` : opts.token;
  if (opts.userAgent) cfg.HEADERS['User-Agent'] = opts.userAgent;
}
