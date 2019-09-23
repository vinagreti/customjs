import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'custom-table-column',
  templateUrl: './custom-table-column.component.html',
  styleUrls: ['./custom-table-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableColumnComponent {
  @Input() name: string;

  @Input() title: string;

  @Input() description: string;

  @Input() prop: string;

  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  constructor() {}
}
