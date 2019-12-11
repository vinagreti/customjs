import { HttpHeaders } from '@angular/common/http';

/*
 * Generic Http Call Options
 *
 * Generic Http Call Options structure
 */
export type GenericHttpCallOptions = {
  body?: {
    [prop: string]: any;
  };
  headers?: HttpHeaders;
  withCredentials?: boolean;
  params?: {
    [prop: string]: any;
  };
  loadingMessage?: string;
} & {
  [prop: string]: any;
};

/*
 * Generic Http Http Request Types
 *
 * Generic Http Http Request Types structure
 */
export type GenericHttpRequestTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
