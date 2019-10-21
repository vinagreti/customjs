import { Component, Input, OnInit } from '@angular/core';
import { I18nLocale, I18nService } from '@customjs/i18n';
import { VersionService } from '@customjs/version';
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

  constructor(
    public i18n: I18nService<AppTranslationKeysMap>,
    public versionService: VersionService
  ) {
    this.i18nLocales = this.i18n.enabledLocales;
  }

  ngOnInit() {
    this.locale = this.i18n.locale;
  }

  setLanguage(lang: I18nLocale) {
    return this.i18n.setLocale(lang);
  }
}
