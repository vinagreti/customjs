import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ask as askI18n } from './ask.i18n';

@Component({
  selector: 'lib-ask',
  templateUrl: './ask.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskComponent {
  @Input() question: string;

  @Input() cancel = `${askI18n.cancel}`;

  @Input() confirm = `${askI18n.confirm}`;

  @Input() reject = `${askI18n.reject}`;

  @Input() title: string;

  @Input() showReject: boolean;

  @Input() hideCancel: boolean;

  @Output() answer = new EventEmitter();

  constructor() {}

  doConfirm(confirmation) {
    this.answer.emit(confirmation);
  }
}
