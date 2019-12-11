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

export enum CustomListItemsTypes {
  ARRAY = 'array',
  OBSERVABLEARRAY = 'observablearray',
  PROMISEARRAY = 'promisearray',
  FUNCTIONARRAY = 'functionarray',
  FUNCTIONOBSERVABLEARRAY = 'functionobservablearray',
  FUNCTIONPROMISEARRAY = 'functionpromisearray',
}

export type CustomListFetchType = 'function' | 'direct';

export type CustomListPromiseItems = Promise<any[]>;

export type CustomListObservableItems = Observable<any[]>;

export type CustomListFunctionItems = (event: CustomListChangeEvent) => any[];

export type CustomListFunctionPromiseItems = (
  event: CustomListChangeEvent,
) => CustomListPromiseItems;

export type CustomListFunctionObservableItems = (
  event: CustomListChangeEvent,
) => CustomListObservableItems;

export type CustomListItems =
  | any[]
  | CustomListPromiseItems
  | CustomListObservableItems
  | CustomListFunctionItems
  | CustomListFunctionPromiseItems
  | CustomListFunctionObservableItems;
