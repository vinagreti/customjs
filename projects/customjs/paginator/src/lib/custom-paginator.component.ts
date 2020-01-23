import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CustomPaginatorTranslationKeysMap } from './custom-list-internal.i18n';

const DEFAULT_PAGE_SIZE = 20;

export interface CustomPaginatorEvent {
  page: number;
  limit: number;
}

@Component({
  selector: 'custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPaginatorComponent {
  totalPages$ = new BehaviorSubject<number>(1);

  private visibleItems$ = new EventEmitter<any[]>();

  private paginate$ = new EventEmitter<CustomPaginatorEvent>();

  page$ = new BehaviorSubject<number>(1);

  @Output() paginate = this.paginate$.pipe(
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    debounceTime(0), // waits for all bindings to finish // TODO: resolve this weird behaviour
  );

  @Output() visibleItems = this.visibleItems$.pipe(
    distinctUntilChanged((a = [], b = []) => {
      return JSON.stringify(a) === JSON.stringify(b);
    }),
  );

  @Input()
  get totalItems() {
    return this.innerTotalItems;
  }
  set totalItems(v: number) {
    if (this.innerTotalItems !== v) {
      this.innerTotalItems = v;
      this.refreshState(false);
    }
  }

  @Input()
  get items() {
    return this.innerItems;
  }
  set items(v: any[]) {
    this.innerItems = v || [];
    this.refreshState(false);
  }

  @Input()
  get page() {
    return this.innerPage;
  }
  set page(v: number) {
    this.setPage(v);
    this.refreshState();
  }

  @Input()
  get pageSize() {
    return this.innerPageSize;
  }
  set pageSize(v: number) {
    if (v > 0) {
      this.innerPageSize = v;
    } else {
      this.innerPageSize = DEFAULT_PAGE_SIZE;
    }
    this.refreshState(false);
  }

  private innerItems: any[];

  private innerTotalItems: number;

  private innerPage = 1;

  private innerPageSize = 20;

  constructor(public i18n: I18nService<CustomPaginatorTranslationKeysMap>) {}

  prev() {
    const prev = this.page - 1;
    if (prev > 0) {
      this.setPage(prev);
      this.refreshState();
    } else {
      this.start();
    }
  }

  next() {
    const next = this.page + 1;
    const totalPages = this.totalPages$.getValue();
    if (next < totalPages) {
      this.setPage(next);
      this.refreshState();
    } else {
      this.end();
    }
  }

  start() {
    this.setPage(1);
    this.refreshState();
  }

  end() {
    const totalPages = this.totalPages$.getValue();
    this.setPage(totalPages);
    this.refreshState();
  }

  private setPage(page: number) {
    this.innerPage = page;
    this.page$.next(page);
  }

  private refreshState(emitPaginate = true) {
    const totalItems = this.totalItems || (this.items || []).length;
    const pageSize = this.pageSize || totalItems;
    const totalPages = this.countPages(totalItems, pageSize);
    const visibleItems = this.totalItems
      ? this.items
      : this.selectVisible(this.items, this.page, pageSize);
    this.totalPages$.next(totalPages);

    this.visibleItems$.emit(visibleItems);

    if (emitPaginate) {
      this.paginate$.emit({
        page: this.page,
        limit: this.pageSize,
      });
    }
  }

  private countPages(total = 0, max = 1) {
    if (total) {
      const rest = total % max;
      const divisible = total - rest;
      if (rest) {
        return divisible / max + 1;
      } else {
        return divisible / max;
      }
    } else {
      return 0;
    }
  }

  private selectVisible(items: any[] = [], page: number, max: number) {
    const total = items.length;
    if (total > 1) {
      const startAt = page * max - max;
      const stopAt = startAt + (max - 1);
      const maxStopAt = stopAt < total ? stopAt : total - 1;
      return items.slice(startAt, maxStopAt + 1);
    } else {
      return items;
    }
  }
}
