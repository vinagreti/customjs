import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'custom-actions-option',
  templateUrl: './custom-actions-option.component.html',
  styleUrls: ['./custom-actions-option.component.css'],
})
export class CustomActionsOptionComponent {
  @Input() loading: boolean;

  @Input() disabled: boolean;

  @Output() optionSelected = new EventEmitter();

  childTemplate$ = new ReplaySubject<TemplateRef<any>>();

  @ContentChildren(TemplateRef, { descendants: false })
  private set childTemplates(v: QueryList<TemplateRef<any>>) {
    const templates = v
      .toArray()
      .filter((template: any) => template._declarationTContainer.tagName === 'ng-template');
    this.childTemplate$.next(templates[0]);
  }

  constructor() {}

  onOptionSelected(data: any) {
    this.optionSelected.emit(data);
  }
}
