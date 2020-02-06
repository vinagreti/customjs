import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatPaginator, ThemePalette } from '@angular/material';
import { CustomActionsComponent } from '@customjs/smart-layout';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CustomTableColumnComponent } from './custom-table-column/custom-table-column.component';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent {
  actions$ = new BehaviorSubject<CustomActionsComponent>(undefined);

  columns$ = new BehaviorSubject<CustomTableColumnComponent[]>([]);

  columnsNames$: Observable<string[]> = this.columns$.pipe(
    switchMap(columns =>
      this.actions$.pipe(
        map(actions => {
          const columnsNames = columns.map(column => column.name);
          if (actions) {
            return [...columnsNames, 'actions'];
          } else {
            return columnsNames;
          }
        }),
      ),
    ),
  );

  items$ = new ReplaySubject<any>();

  @Input() noDataMessage = 'label.No_data';

  @Input() noColumnsMessage = 'label.No_data';

  @Input() selectionDisabled: boolean;

  @Input() fixedHeader: boolean;

  @Input() color: ThemePalette;

  @Input()
  set items(v: any) {
    this.items$.next(v);
  }

  @ContentChildren(CustomTableColumnComponent)
  set innerColumns(v: QueryList<CustomTableColumnComponent>) {
    this.columns$.next(v.toArray());
  }

  @ContentChild(CustomActionsComponent, { static: false })
  set actions(v: CustomTableColumnComponent) {
    this.actions$.next(v);
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
