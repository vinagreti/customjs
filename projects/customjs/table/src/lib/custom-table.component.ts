import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CustomActionsComponent } from '@customjs/smart-layout';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CustomTableColumnComponent } from './custom-table-column/custom-table-column.component';
import { CustomTableSelection, ICustomTableSelection } from './custom-table-selection.model';

enum STATIC_COLUMNS {
  ACTIONS = 'ACTIONS',
  SELECT = 'SELECT',
}

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
          const finalColumns = [...columnsNames];
          if (actions) {
            finalColumns.push(STATIC_COLUMNS.ACTIONS);
          }
          if (this.selectable) {
            finalColumns.unshift(STATIC_COLUMNS.SELECT);
          }
          return finalColumns;
        }),
      ),
    ),
  );

  items$ = new BehaviorSubject<any>([]);

  staticColumnNames = STATIC_COLUMNS;

  @Input() selection: ICustomTableSelection = new CustomTableSelection();

  @Input() selectable: boolean;

  @Input() selectionDisabled: boolean;

  @Input() hideBatchSelection: boolean;

  @Input() noDataMessage = 'label.No_data';

  @Input() noColumnsMessage = 'label.No_data';

  @Input()
  set color(v: ThemePalette) {
    this.innerColor = v || 'primary';
  }
  get color() {
    return this.innerColor;
  }

  @Input()
  set items(v: any) {
    this.items$.next(v);
  }
  get items() {
    return this.items$.getValue();
  }

  @ContentChildren(CustomTableColumnComponent)
  set innerColumns(v: QueryList<CustomTableColumnComponent>) {
    this.columns$.next(v.toArray());
  }

  @ContentChild(CustomActionsComponent)
  set actions(v: CustomActionsComponent) {
    this.actions$.next(v);
  }

  @Output() sort = new ReplaySubject<string>();

  private currentSortProperty: string;

  private innerColor: ThemePalette = 'primary';

  constructor() {}

  onSort(prop: string) {
    if (this.currentSortProperty !== prop) {
      this.currentSortProperty = prop;
    } else {
      this.currentSortProperty = `-${prop}`;
    }
    this.sort.next(this.currentSortProperty);
  }
}
