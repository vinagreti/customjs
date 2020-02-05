import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material';
import { I18nService } from '@customjs/i18n';
import { CustomPaginatorComponent } from '@customjs/paginator';
import { CustomTableComponent } from '@customjs/table';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomListCardComponent } from './custom-list-card/custom-list-card.component';
import { CustomListFilterComponent } from './custom-list-filter/custom-list-filter.component';
import { CustomListTranslationKeysMap } from './custom-list-internal.i18n';
import {
  CustomListChangeEvent,
  CustomListFetchResult,
  CustomListFetchType,
  CustomListFunctionItems,
  CustomListFunctionObservableItems,
  CustomListFunctionPromiseItems,
  CustomListItems,
  CustomListItemsTypes,
  CustomListMode,
  CustomListObservableItems,
  CustomListPromiseItems,
} from './custom-list.models';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListComponent implements OnDestroy {
  listModes = CustomListMode;

  curentStateItems: any[];

  loading$ = new BehaviorSubject<boolean>(false);

  refreshing$ = new BehaviorSubject<boolean>(false);

  filtering$ = new BehaviorSubject<boolean>(false);

  sorting$ = new BehaviorSubject<boolean>(false);

  paginating$ = new BehaviorSubject<boolean>(false);

  card$ = new ReplaySubject<CustomListCardComponent>();

  total$ = new ReplaySubject<number>();

  hideFilter$ = new BehaviorSubject<boolean>(true);

  items$ = new ReplaySubject<any[]>();

  visibleItems$ = new BehaviorSubject<any[]>([]);

  @ContentChild(CustomTableComponent, { static: true })
  get table() {
    return this.innerTable;
  }
  set table(v: CustomTableComponent) {
    this.innerTable = v;
    this.setTableItems();
    this.setTableColor();
    this.watchTableEvents();
  }

  @ContentChild(CustomListFilterComponent, { static: true })
  get filterComponent() {
    return this.innerFilter;
  }
  set filterComponent(v: CustomListFilterComponent) {
    this.innerFilter = v;
    this.watchFilterevents();
  }

  @ViewChild(CustomPaginatorComponent, { static: true })
  get paginatorComponent() {
    return this.innerPaginator;
  }
  set paginatorComponent(v: CustomPaginatorComponent) {
    this.innerPaginator = v;
  }

  @ContentChild(CustomListCardComponent, { static: true })
  set innerCard(v: CustomListCardComponent) {
    this.card$.next(v);
  }

  @Input()
  get selectionDisabled() {
    return this.innerSelectionDisabled;
  }
  set selectionDisabled(v: any) {
    this.innerSelectionDisabled = v;
    this.setTableSelectionDisabled();
  }

  @Input()
  get color() {
    return this.innerColor;
  }
  set color(v: any) {
    this.innerColor = v;
    this.setTableColor();
  }

  @Input()
  get items() {
    return this.innerItems;
  }
  set items(v: any) {
    this.innerItems = v;
    this.onInputItemsChange();
  }

  @Input() mode: CustomListMode = CustomListMode.RESPONSIVE;

  @Input() hideTotal: boolean;

  @Input() pageSize: number;

  @Input() noDataMessage: string;

  @Input() loadingMessage: string;

  @Output() itemSelected = new EventEmitter();

  @Output() refresh = new EventEmitter();

  private sortBy: string;

  private innerItems: any[];

  private innerFilter: CustomListFilterComponent;

  private innerPaginator: CustomPaginatorComponent;

  private innerTable: CustomTableComponent;

  private innerSelectionDisabled: boolean;

  private innerColor: ThemePalette;

  private tableItemSelectedSubscription: Subscription;

  private tableSortSubscription: Subscription;

  private tableFilterSubscription: Subscription;

  private fetchMethodSubscription: Subscription;

  fetchType: CustomListFetchType;

  constructor(public i18n: I18nService<CustomListTranslationKeysMap>) {}

  ngOnDestroy(): void {
    this.unwatchTableEvents();
    this.unwatchFilterEvents();
  }

  onItemSelected(item) {
    this.itemSelected.emit(item);
  }

  onPaginate($event) {
    if (this.fetchType === CustomListFetchType.FUNCTION) {
      this.paginating$.next(true);
      this.refreshItems().then(() => this.paginating$.next(false));
    }
  }

  onVisibleItemsChange(visibleItems: any[]) {
    if (this.fetchType === CustomListFetchType.DIRECT) {
      this.setVisibleItems(visibleItems);
    }
  }

  clearAndRefreshItems() {
    if (this.fetchType === CustomListFetchType.FUNCTION) {
      this.clearCurentStateItems();
      this.refreshing$.next(true);
      this.refreshItems().then(() => this.refreshing$.next(false));
    }
    this.refresh.emit();
  }

  ////////////
  // FILTER //
  ////////////
  private watchFilterevents() {
    this.unwatchFilterEvents();
    if (this.innerFilter) {
      this.tableFilterSubscription = this.innerFilter.filter.subscribe(filter => {
        if (this.paginatorComponent.page !== 1) {
          this.paginatorComponent.page = 1;
        } else {
          this.filtering$.next(true);
          this.refreshItems().then(() => this.filtering$.next(false));
        }
      });
      const closeFilterSubs = this.innerFilter.closefilter.subscribe(_ => {
        this.hideFilter$.next(true);
      });
      this.tableFilterSubscription.add(closeFilterSubs);
    }
  }

  private unwatchFilterEvents() {
    if (this.tableFilterSubscription) {
      this.tableFilterSubscription.unsubscribe();
    }
  }

  ///////////
  // TABLE //
  ///////////
  private setTableSelectionDisabled() {
    if (this.table) {
      this.table.selectionDisabled = this.innerSelectionDisabled;
    }
  }

  private setTableItems() {
    if (this.table) {
      this.table.items = this.visibleItems$.value;
    }
  }

  private setTableColor() {
    if (this.table) {
      this.table.color = this.color;
    }
  }

  private watchTableEvents() {
    this.unwatchPreviousTableEvents();
    this.subscribeToTableItemSelectedEvent();
    this.subscribeToTableSortEvent();
  }

  private unwatchPreviousTableEvents() {
    this.unwatchTableEvents();
  }

  private unwatchTableEvents() {
    this.unsubscribeFromTableItemSelectedEvent();
    this.unsubscribeFromTableSortEvent();
  }

  private subscribeToTableItemSelectedEvent() {
    if (this.table) {
      this.tableItemSelectedSubscription = this.table.itemSelected.subscribe(item => {
        this.itemSelected.emit(item);
      });
    }
  }

  private unsubscribeFromTableItemSelectedEvent() {
    if (this.tableItemSelectedSubscription) {
      this.tableItemSelectedSubscription.unsubscribe();
    }
  }

  private subscribeToTableSortEvent() {
    if (this.table) {
      this.tableItemSelectedSubscription = this.table.sort.subscribe(prop => {
        this.sortBy = prop;
        if (this.paginatorComponent.page !== 1) {
          (this.paginatorComponent as any).setPage(1);
        }
        this.sorting$.next(true);
        this.refreshItems().then(() => this.sorting$.next(false));
      });
    }
  }

  private unsubscribeFromTableSortEvent() {
    if (this.tableSortSubscription) {
      this.tableSortSubscription.unsubscribe();
    }
  }

  ///////////
  // ITEMS //
  ///////////

  private setVisibleItems(visibleItems: any[] = []) {
    this.visibleItems$.next(visibleItems);
    this.setTableItems();
  }

  private onInputItemsChange() {
    setTimeout(() => {
      // wait for all initial input bindings bifdings
      this.detectFetchType();
      this.loading$.next(true);
      this.refreshItems().then(() => this.loading$.next(false));
    }, 0);
  }

  private refreshItems(): Promise<any> {
    return new Promise(resolve => {
      let itemsPromise: Promise<any[]>;
      if (this.fetchType !== CustomListFetchType.FUNCTION) {
        itemsPromise = this.refreshItemInDirectMode();
      } else {
        itemsPromise = this.refreshItemsInFunctionMode();
      }
      itemsPromise.then(items => {
        this.setVisibleItems(items);
        resolve(items);
      });
    });
  }

  private refreshItemInDirectMode(): Promise<any[]> {
    return new Promise(resolve => {
      this.setItemsBasedOnItemsType(this.items).then(items => {
        this.setItems(items);
        this.setTotal(undefined);
        resolve(items);
      });
    });
  }

  private refreshItemsInFunctionMode(): Promise<any> {
    const result = this.callItemsFunction();
    return this.setItemsBasedOnFetchFunctionResult(result);
  }

  private callItemsFunction() {
    const changeEvent = this.mountChangeEvent();
    return (this.items as (changeEvent: CustomListChangeEvent) => CustomListFetchResult)(
      changeEvent,
    );
  }

  private setItemsBasedOnFetchFunctionResult(result) {
    const resultTypeType = this.detectFetchFunctionResultType(result);
    switch (resultTypeType) {
      case CustomListItemsTypes.FUNCTIONCHANGERESPONSE:
        return this.parseChangeResponseDirectly(result as CustomListFunctionItems);
      // RESOLVES OBSERVABLE //
      case CustomListItemsTypes.FUNCTIONOBSERVABLECHANGERESPONSE:
        return this.parseChangeResponseFromObservable(result as CustomListFunctionObservableItems);
      // RESOLVES PROMISE //
      case CustomListItemsTypes.FUNCTIONPROMISECHANGERESPONSE:
        return this.parseChangeResponseFromPromise(result as CustomListFunctionPromiseItems);
    }
  }

  private setItems(items: any[]) {
    this.items$.next(items);
  }

  private setTotal(total: number) {
    this.total$.next(total);
  }

  private parseChangeResponseDirectly(response: CustomListFunctionItems) {
    this.setTotal(response.count);
    return new Promise<any[]>(resolve => {
      resolve(response.results);
    });
  }

  private parseChangeResponseFromObservable(observableItems: CustomListFunctionObservableItems) {
    return new Promise<any[]>(resolve => {
      if (this.fetchMethodSubscription) {
        this.fetchMethodSubscription.unsubscribe();
      }
      this.fetchMethodSubscription = observableItems.pipe(take(1)).subscribe(response => {
        this.setTotal(response.count);
        resolve(response.results);
      });
    });
  }

  private parseChangeResponseFromPromise(response: CustomListFunctionPromiseItems) {
    return new Promise<any[]>(resolve => {
      response.then(res => {
        this.setTotal(res.count);
        resolve(res.results);
      });
    });
  }

  private setItemsBasedOnItemsType(
    items: any[] | CustomListObservableItems | CustomListPromiseItems = [],
  ) {
    const itemType = this.detectItemsType(items);
    switch (itemType) {
      case CustomListItemsTypes.ARRAY:
        return this.getItemsFromArray(items as any[]);
      // RESOLVES OBSERVABLE //
      case CustomListItemsTypes.OBSERVABLEARRAY:
        return this.getItemsFromObservable(items as CustomListObservableItems);
      // RESOLVES PROMISE //
      case CustomListItemsTypes.PROMISEARRAY:
        return this.getItemsFromPromise(items as CustomListPromiseItems);
    }
  }

  private detectFetchType() {
    if (typeof this.items === 'function') {
      this.fetchType = CustomListFetchType.FUNCTION;
    } else {
      this.fetchType = CustomListFetchType.DIRECT;
    }
  }

  private getItemsFromArray(items: any[]) {
    return new Promise<any[]>(resolve => {
      this.setTotal(items.length);
      resolve(items);
    });
  }

  private getItemsFromObservable(observableItems: CustomListObservableItems) {
    return new Promise<any[]>(resolve => {
      if (this.fetchMethodSubscription) {
        this.fetchMethodSubscription.unsubscribe();
      }
      this.fetchMethodSubscription = observableItems.pipe(take(1)).subscribe(items => {
        this.setTotal(items.length);
        resolve(items);
      });
    });
  }

  private getItemsFromPromise(promiseItems: CustomListPromiseItems) {
    return new Promise<any[]>(resolve => {
      promiseItems.then(items => {
        this.setTotal(items.length);
        resolve(items);
      });
    });
  }

  private clearCurentStateItems(items: any[] = [], count?: number) {
    this.setItems([]);
    this.setTotal(0);
  }

  private mountChangeEvent(): CustomListChangeEvent {
    return {
      limit: this.paginatorComponent.pageSize,
      page: this.paginatorComponent.page || 1,
      filter: this.filterComponent ? this.filterComponent.form : {},
      ordering: this.sortBy,
    };
  }

  private detectItemsType(items: CustomListItems): CustomListItemsTypes {
    switch (true) {
      case items instanceof Array:
        return CustomListItemsTypes.ARRAY;
      case items instanceof Observable:
        return CustomListItemsTypes.OBSERVABLEARRAY;
      case items instanceof Promise:
        return CustomListItemsTypes.PROMISEARRAY;
    }
  }

  private detectFetchFunctionResultType(result: CustomListFetchResult) {
    switch (true) {
      case result instanceof Observable:
        return CustomListItemsTypes.FUNCTIONOBSERVABLECHANGERESPONSE;
      case result instanceof Promise:
        return CustomListItemsTypes.FUNCTIONPROMISECHANGERESPONSE;
      case true:
        return CustomListItemsTypes.FUNCTIONCHANGERESPONSE;
    }
  }
}
