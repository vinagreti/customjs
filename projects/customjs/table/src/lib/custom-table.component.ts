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

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent {
  columns$ = new BehaviorSubject<CustomTableColumnComponent[]>([]);

  columnsNames$: Observable<string[]> = this.columns$.pipe(
    map(columns => columns.map(column => column.name)),
  );

  items$ = new ReplaySubject<any>();

  @Input() noDataMessage = 'label.No_data';

  @Input() noColumnsMessage = 'label.No_data';

  @Input() selectionDisabled: boolean;

  @Input() color: ThemePalette;

  @Input()
  set items(v: any) {
    this.items$.next(v);
  }

  @ContentChildren(CustomTableColumnComponent)
  set innerColumns(v: QueryList<CustomTableColumnComponent>) {
    this.columns$.next(v.toArray());
  }

  @Output() itemSelected = new EventEmitter<any>(undefined);

  @Output() sort = new ReplaySubject<string>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private currentSortProperty: string;

  constructor() {}

  onItemSelected(item) {
    this.itemSelected.next(item);
  }

  onSort(prop: string) {
    if (this.currentSortProperty !== prop) {
      this.currentSortProperty = prop;
    } else {
      this.currentSortProperty = `-${prop}`;
    }
    this.sort.next(this.currentSortProperty);
  }
}
