import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, tap, debounceTime, startWith } from 'rxjs/operators';

const DEFAULT_PAGE_SIZE = 20;

const MAX_PAGE_SIZE = 1000;

export interface CustomPaginatorEvent {
  page: number;
  limit: number;
}

@Component({
  selector: 'custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginatorComponent {

  totalPages$ = new BehaviorSubject<number>(1);

  private visibleItems$ = new EventEmitter<any[]>();

  private paginate$ = new EventEmitter<CustomPaginatorEvent>();

  private pageStream$ = new BehaviorSubject<number>(1);

  page$ = this.pageStream$.pipe(
    distinctUntilChanged(),
    tap(() => this.refreshState())
  );

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
  get count() { return this.innerCount; }
  set count(v: number) {
    if (this.innerCount !== v) {
      this.innerCount = v;
      this.refreshState();
    }
  }

  @Input()
  get items() { return this.innerItems; }
  set items(v: any[]) {
    this.innerItems = v || [];
    this.refreshState();
  }

  @Input()
  get page() { return this.pageStream$.getValue(); }
  set page(v: number) {
    this.pageStream$.next(v);
  }

  @Input()
  get pageSize() { return this.innerPageSize; }
  set pageSize(v: number) {
    this.innerPageSize = v === 0 ? MAX_PAGE_SIZE : (v > 0 ? v : DEFAULT_PAGE_SIZE);
    this.refreshState();
  }

  private innerItems: any[];

  private innerCount: number;

  private innerPageSize = 20;

  constructor() { }

  prev() {
    const prev = this.page - 1;
    if (prev > 0) {
      this.pageStream$.next(prev);
    } else {
      this.start();
    }
  }

  next() {
    const next = this.page + 1;
    const totalPages = this.totalPages$.getValue();
    if (next < totalPages) {
      this.pageStream$.next(next);
    } else {
      this.end();
    }
  }

  start() {
    this.pageStream$.next(1);
  }

  end() {
    const totalPages = this.totalPages$.getValue();
    this.pageStream$.next(totalPages);
  }

  private refreshState() {
    const count = this.count || (this.items || []).length;
    const pageSize = this.pageSize || count;
    const totalPages = this.countPages(count, pageSize);
    const visible = this.count ? this.items : this.selectVisible(this.items, this.page, pageSize);
    this.totalPages$.next(totalPages);
    this.visibleItems$.emit(visible);
    this.paginate$.emit({
      page: this.page,
      limit: this.pageSize
    });
  }

  private countPages(total = 0, max = 1) {
    if (total) {
      const rest = total % max;
      const divisible = total - rest;
      if (rest) {
        return (divisible / max) + 1;
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
      const startAt = (page * max) - max;
      const stopAt = startAt + (max - 1);
      const maxStopAt = stopAt < total ? stopAt : (total - 1);
      return items.slice(startAt, maxStopAt + 1);
    } else {
      return items;
    }
  }
}
