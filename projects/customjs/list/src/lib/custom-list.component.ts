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
import { CustomListCardComponent } from './custom-list-card/custom-list-card.component';
import { CustomListFilterComponent } from './custom-list-filter/custom-list-filter.component';
import { CustomListTranslationKeysMap } from './custom-list-internal.i18n';
import {
  CustomListChangeEvent,
  CustomListChangeResponse,
  CustomListItems,
  CustomListItemsTypes,
  CustomListObservableItems,
  CustomListPromiseItems,
} from './custom-list.models';

const DEFAULT_COLOR = 'accent';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListComponent implements OnDestroy {
  curentStateItems: any[];

  loading$ = new BehaviorSubject<boolean>(true);

  card$ = new ReplaySubject<CustomListCardComponent>();

  count$ = new ReplaySubject<number>();

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
    this.innerColor = v || DEFAULT_COLOR;
    this.setTableColor();
  }

  @Input()
  get items() {
    return this.innerItems;
  }
  set items(v: any) {
    this.innerItems = v;
    if (typeof v !== 'function') {
      this.refreshItems();
    }
  }

  @Input() hideTotal: boolean;

  @Input() pageSize: number;

  @Input() noDataMessage: string;

  @Output() itemSelected = new EventEmitter();

  @Output() refresh = new EventEmitter();

  @Output() sort = new BehaviorSubject<string>(undefined);

  private innerItems: any[];

  private innerFilter: CustomListFilterComponent;

  private innerPaginator: CustomPaginatorComponent;

  private innerTable: CustomTableComponent;

  private innerSelectionDisabled: boolean;

  private innerColor: ThemePalette = DEFAULT_COLOR;

  private tableItemSelectedSubscription: Subscription;

  private tableSortSubscription: Subscription;

  private tableFilterSubscription: Subscription;

  private fetchMethosSubscription: Subscription;

  constructor(public i18n: I18nService<CustomListTranslationKeysMap>) {}

  ngOnDestroy(): void {
    this.unwatchTableEvents();
    this.unwatchFilterEvents();
  }

  onItemSelected(item) {
    this.itemSelected.emit(item);
  }

  onPaginate($event) {
    this.refreshItems();
  }

  onVisibleItemsChange(visibleItems: any[] = []) {
    this.visibleItems$.next(visibleItems);
    this.setTableItems();
  }

  clearAndRefreshItems() {
    this.setCurentStateItems();
    this.refreshItems();
    this.refresh.emit();
  }

  private watchFilterevents() {
    this.unwatchFilterEvents();
    if (this.innerFilter) {
      this.tableFilterSubscription = this.innerFilter.filter.subscribe(filter => {
        if (this.paginatorComponent.page !== 1) {
          this.paginatorComponent.page = 1;
        } else {
          this.refreshItems();
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
        this.sort.next(prop);
        if (this.paginatorComponent.page !== 1) {
          this.paginatorComponent.page = 1;
        } else {
          this.refreshItems();
        }
      });
    }
  }

  private unsubscribeFromTableSortEvent() {
    if (this.tableSortSubscription) {
      this.tableSortSubscription.unsubscribe();
    }
  }

  private refreshItems() {
    this.loading$.next(true);
    if (typeof this.items === 'function') {
      const changeEvent = this.mountChangeEvent();
      const result: CustomListItems = (this.items as any)(changeEvent);
      this.setConfigBasedOnChangeResponse(result);
    } else {
      this.setItemsBasedOnItemsType(this.items, (items: any[]) => {
        this.setCurentStateItems(items);
      });
    }
  }

  private setConfigBasedOnChangeResponse(result: CustomListItems) {
    this.setItemsBasedOnItemsType(result, (response: CustomListChangeResponse) => {
      this.setCurentStateItems(response.results, response.count);
    });
  }

  private setItemsBasedOnItemsType(items: CustomListItems, cbk) {
    const itemType = this.detectItemsType(items);
    switch (itemType) {
      case CustomListItemsTypes.ARRAY:
        cbk(items as any[]);
        this.loading$.next(false);
        break;
      // RESOLVES OBSERVABLE //
      case CustomListItemsTypes.OBSERVABLEARRAY:
        const observable = items as CustomListObservableItems;
        if (this.fetchMethosSubscription) {
          this.fetchMethosSubscription.unsubscribe();
        }
        this.fetchMethosSubscription = observable.subscribe(observablItems => {
          cbk(observablItems);
          this.loading$.next(false);
        });
        break;
      // RESOLVES PROMISE //
      case CustomListItemsTypes.PROMISEARRAY:
        const promise = items as CustomListPromiseItems;
        promise.then(promiseItems => {
          cbk(promiseItems);
          this.loading$.next(false);
        });
        break;
    }
  }

  private setCurentStateItems(items: any[] = [], count?: number) {
    this.items$.next(items);
    this.count$.next(count);
    if (count) {
      this.visibleItems$.next(items);
    }
  }

  private mountChangeEvent(): CustomListChangeEvent {
    const event: CustomListChangeEvent = {
      limit: this.paginatorComponent.pageSize,
      page: this.paginatorComponent.page || 1,
      filter: this.filterComponent ? this.filterComponent.form : {},
    };

    if (this.sort.value) {
      event.ordering = this.sort.value;
    }

    return event;
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
}
