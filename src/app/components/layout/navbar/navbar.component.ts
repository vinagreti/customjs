import { Component, Input, OnInit } from '@angular/core';
import { I18nLocale, I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  i18nLocales: I18nLocale[];

  locale: I18nLocale;

  @Input() title = '';

  @Input() routerPath = '/';

  constructor(private i18nService: I18nService<AppTranslationKeysMap>) {
    this.i18nLocales = this.i18nService.enabledLocales;
  }

  ngOnInit() {
    this.locale = this.i18nService.locale;
  }

  setLanguage(lang: I18nLocale) {
    return this.i18nService.setLocale(lang);
  }
}
