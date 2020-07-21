export enum CustomFilterPaginateSortEventType {
  SORT,
  FILTER,
  PAGINATE,
}

export type CustomFilterPaginateSortEventParamType = Date | number | string;

export interface CustomFilterPaginateSortEventParams {
  [key: string]: CustomFilterPaginateSortEventParamType;
}

export interface CustomFilterPaginateSortEvent {
  filter: CustomFilterPaginateSortEventParams;
  page: number;
  limit: number;
  sort: string;
}

export interface CustomFilterPaginateSortResponse<T> {
  page: number;
  limit: number;
  count: number;
  results: T[];
}
