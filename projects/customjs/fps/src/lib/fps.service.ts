import { Injectable } from '@angular/core';
import { customFilterPaginateSort } from './filter-paginate-sort';
import {
  CustomFilterPaginateSortEvent,
  CustomFilterPaginateSortResponse,
} from './filter-paginate-sort.models';

@Injectable({
  providedIn: 'root',
})
export class CustomFpsService {
  constructor() {}

  filterPaginateSort<T>(
    data: any[],
    event: CustomFilterPaginateSortEvent,
  ): CustomFilterPaginateSortResponse<T> {
    return customFilterPaginateSort(data, event);
  }
}
