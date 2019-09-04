import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { I18nLocale, I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  today = Date.now();

  locale: I18nLocale;

  locales = I18nLocale;

  constructor(
    public i18n: I18nService<AppTranslationKeysMap>,
    public sanitizer: DomSanitizer
  ) {
    this.locale = this.i18n.locale;
  }

  sanitize(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
