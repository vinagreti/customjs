import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CustomActionsComponent } from '@customjs/smart-layout';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
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
export class CustomTableComponent implements OnInit {
  actions$ = new BehaviorSubject<CustomActionsComponent>(undefined);

  columns$ = new BehaviorSubject<CustomTableColumnComponent[]>([]);

  visibleColumns$ = new BehaviorSubject<string[]>([]);

  items$ = new BehaviorSubject<any>([]);

  staticColumnNames = STATIC_COLUMNS;

  @Input() selection: ICustomTableSelection = new CustomTableSelection();

  @Input()
  set selectable(v: boolean) {
    this.innerSelectable = v;
    this.setColumns();
  }
  get selectable() {
    return this.innerSelectable;
  }

  @Input() selectionDisabled: boolean;

  @Input()
  set hideBatchSelection(v: boolean) {
    this.innerHideBatchSelection = v;
    this.setColumns();
  }
  get hideBatchSelection() {
    return this.innerHideBatchSelection;
  }

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
    this.setColumns();
  }

  @ContentChildren(CustomActionsComponent, { descendants: false })
  set actions(v: QueryList<CustomActionsComponent>) {
    this.actions$.next(v.toArray()[0]);
    this.setColumns();
  }

  @Output() sort = new ReplaySubject<string>();

  private currentSortProperty: string;

  private innerColor: ThemePalette = 'primary';

  private innerSelectable: boolean;

  private innerHideBatchSelection: boolean;

  constructor() {}

  ngOnInit() {
    this.setColumns();
  }

  onSort(prop: string) {
    if (this.currentSortProperty !== prop) {
      this.currentSortProperty = prop;
    } else {
      this.currentSortProperty = `-${prop}`;
    }
    this.sort.next(this.currentSortProperty);
  }

  private setColumns() {
    const columns = this.columns$.getValue();
    const visibleColumns = columns.map(column => column.name);
    const finalColumns = [...visibleColumns];
    if (this.actions$.getValue()) {
      finalColumns.push(STATIC_COLUMNS.ACTIONS);
    }
    if (this.selectable) {
      finalColumns.unshift(STATIC_COLUMNS.SELECT);
    }
    this.visibleColumns$.next(finalColumns);
  }
}
