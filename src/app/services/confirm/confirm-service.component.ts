import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'app-confirm-service',
  templateUrl: './confirm-service.component.html',
  styleUrls: ['./confirm-service.component.scss'],
})
export class ConfirmServiceComponent {
  @Output() confirmed = new EventEmitter();

  @Input() title: string;

  @Input() description: string;

  @Input() confirm: string;

  @Input() reject: string;

  @Input() cancel: string;

  @Input() showReject = false;

  @Input() showCancel = true;

  constructor(public i18n: I18nService<AppTranslationKeysMap>) {}

  doConfirm(confirmation) {
    this.confirmed.emit(confirmation);
  }
}
