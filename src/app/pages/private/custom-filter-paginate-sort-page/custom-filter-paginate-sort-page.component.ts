import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { customFilterPaginateSort, CustomFilterPaginateSortResponse } from 'projects/customjs/fps';
import { CustomListChangeEvent } from 'projects/customjs/list/src/public-api';
import { of } from 'rxjs';
import { customFilterPaginateSortPageMockedList } from './custom-filter-paginate-sort-page-mocked-data';

export enum KEYS {
  CREATED = 'created',
  NAME = 'user.name',
  STREET = 'user.address.street',
}

@Component({
  selector: 'app-custom-filter-paginate-sort-page',
  templateUrl: './custom-filter-paginate-sort-page.component.html',
  styleUrls: ['./custom-filter-paginate-sort-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFilterPaginateSortPageComponent implements OnInit {
  rawData = customFilterPaginateSortPageMockedList;

  filterKeys = KEYS;

  constructor() {}

  ngOnInit() {}

  filterSortPaginate = (filterParams: CustomListChangeEvent) => {
    const result: CustomFilterPaginateSortResponse<any> = customFilterPaginateSort(this.rawData, {
      filter: filterParams.filter,
      limit: filterParams.limit,
      page: filterParams.page,
      sort: filterParams.ordering,
    });
    return of(result);
  };
}
