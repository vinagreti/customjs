import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'custom-actions-option',
  templateUrl: './custom-actions-option.component.html',
  styleUrls: ['./custom-actions-option.component.css'],
})
export class CustomActionsOptionComponent {
  autoProject = true;

  @Input() loading: boolean;

  @Input() disabled: boolean;

  @Output() optionSelected = new EventEmitter();

  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

  constructor() {}

  onOptionSelected(data: any) {
    this.optionSelected.emit(data);
  }
}
