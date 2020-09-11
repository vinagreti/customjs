import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CustomActionsOptionComponent } from './custom-actions-option/custom-actions-option.component';
import { CustomActionsConfig } from './custom-actions.models';

@Component({
  selector: 'custom-actions',
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomActionsComponent {
  options$ = new ReplaySubject<CustomActionsOptionComponent[]>();

  template$ = new ReplaySubject<TemplateRef<any>>();

  @Input() data;

  innerData;

  @Input() disabled: boolean;

  @Input() loading: boolean;

  @Input() config: CustomActionsConfig;

  @Input() title: string;

  @Input() description: string;

  @ViewChild('actionsTemplate', { static: true })
  template: TemplateRef<any>;

  @ContentChildren(TemplateRef, { descendants: false }) // direct children only
  private set childTemplates(v: QueryList<TemplateRef<any>>) {
    this.template$.next(v.toArray()[0]);
  }

  @ContentChildren(CustomActionsOptionComponent, { descendants: false })
  private set childActionsOptions(v: QueryList<CustomActionsOptionComponent>) {
    this.options$.next(v.toArray());
  }
}
