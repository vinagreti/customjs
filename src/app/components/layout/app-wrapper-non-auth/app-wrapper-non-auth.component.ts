import { ChangeDetectionStrategy, Component } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'app-wrapper-non-auth',
  templateUrl: './app-wrapper-non-auth.component.html',
  styleUrls: ['./app-wrapper-non-auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperNonAuthComponent {
  constructor(public i18n: I18nService<AppTranslationKeysMap>) {}
}
