import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatPaginator, ThemePalette } from '@angular/material';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomTableColumnComponent } from './custom-table-column/custom-table-column.component';

const DEFAULT_COLOR = 'accent';

@Component({
  selector: 'customjs-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent {
  columns$ = new BehaviorSubject<CustomTableColumnComponent[]>([]);

  color$ = new BehaviorSubject<ThemePalette>(DEFAULT_COLOR);

  columnsNames$: Observable<string[]> = this.columns$.pipe(
    map(columns => columns.map(column => column.name))
  );

  items$ = new ReplaySubject<any>();

  @Input() noDataMessage = 'label.No_data';

  @Input() noColumnsMessage = 'label.No_data';

  @Input() selectionDisabled: boolean;

  @Input()
  set color(color: ThemePalette) {
    this.color$.next(color || DEFAULT_COLOR);
  }

  @Input()
  set items(v: any) {
    this.items$.next(v);
  }

  @ContentChildren(CustomTableColumnComponent)
  set innerColumns(v: QueryList<CustomTableColumnComponent>) {
    this.columns$.next(v.toArray());
  }

  @Output() itemSelected = new EventEmitter<any>(undefined);

  @Output() sort = new BehaviorSubject<string>(undefined);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  onItemSelected(item) {
    this.itemSelected.next(item);
  }

  onSort(prop: string) {
    const currentSortProperty = this.sort.value;
    let nextSortProperty = prop;
    if (currentSortProperty === prop) {
      nextSortProperty = `-${prop}`;
    }
    this.sort.next(nextSortProperty);
  }
}
