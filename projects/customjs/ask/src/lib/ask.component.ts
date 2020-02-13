import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { EventEmitter } from 'events';
import { CustomAskTranslationKeysMap } from './ask.i18n';

@Component({
  selector: 'lib-ask',
  templateUrl: './ask.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskComponent {
  @Input() question: string;

  @Input() cancel;

  @Input() confirm;

  @Input() reject;

  @Input() title: string;

  @Input() showReject: boolean;

  @Input() hideCancel: boolean;

  @Output() answer = new EventEmitter();

  constructor(public i18n: I18nService<CustomAskTranslationKeysMap>) {}

  doConfirm(confirmation) {
    this.answer.emit(confirmation);
  }
}
