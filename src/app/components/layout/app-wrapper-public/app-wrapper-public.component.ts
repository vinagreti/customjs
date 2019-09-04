import { ChangeDetectionStrategy, Component } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'app-wrapper-public',
  templateUrl: './app-wrapper-public.component.html',
  styleUrls: ['./app-wrapper-public.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperPublicComponent {
  constructor(public i18n: I18nService<AppTranslationKeysMap>) {}
}
