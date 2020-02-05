import { Observable } from 'rxjs';

export interface CustomListChangeEvent {
  page: number;
  limit: number;
  filter: { [key: string]: string };
  ordering?: string;
}

export interface CustomListChangeResponse {
  page: number;
  limit: number;
  count: number;
  results: any[];
}

export type CustomListFetchResult =
  | CustomListChangeResponse
  | Promise<CustomListChangeResponse>
  | Observable<CustomListChangeResponse>;

export enum CustomListItemsTypes {
  ARRAY = 'ARRAY',
  OBSERVABLEARRAY = 'OBSERVABLEARRAY',
  PROMISEARRAY = 'PROMISEARRAY',
  FUNCTIONCHANGERESPONSE = 'FUNCTIONCHANGERESPONSE',
  FUNCTIONOBSERVABLECHANGERESPONSE = 'FUNCTIONOBSERVABLECHANGERESPONSE',
  FUNCTIONPROMISECHANGERESPONSE = 'FUNCTIONPROMISECHANGERESPONSE',
}

export enum CustomListFetchType {
  FUNCTION = 'function',
  DIRECT = 'direct',
}

export enum CustomListMode {
  CARD = 'card',
  TABLE = 'table',
  RESPONSIVE = 'responsive',
}

export type CustomListPromiseItems = Promise<any[]>;

export type CustomListObservableItems = Observable<any[]>;

export type CustomListFunctionItems = CustomListChangeResponse;

export type CustomListFunctionPromiseItems = Promise<CustomListChangeResponse>;

export type CustomListFunctionObservableItems = Observable<CustomListChangeResponse>;

export type CustomListItems =
  | any[]
  | CustomListPromiseItems
  | CustomListObservableItems
  | CustomListFunctionItems
  | CustomListFunctionPromiseItems
  | CustomListFunctionObservableItems;
