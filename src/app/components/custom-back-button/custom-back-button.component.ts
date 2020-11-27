import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'custom-back-button',
  templateUrl: './custom-back-button.component.html',
  styleUrls: ['./custom-back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBackButtonComponent {
  constructor(private location: Location, public i18n: I18nService<AppTranslationKeysMap>) {}

  goBack() {
    this.location.back();
  }
}
