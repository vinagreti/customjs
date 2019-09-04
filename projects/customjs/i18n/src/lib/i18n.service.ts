import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { I18nAppConfigService } from './i18n-app-config/i18n-app-config.service';
import { I18nData } from './models/i18n-data.interface';
import {
  I18nLocalesConfig,
  I18N_LOCALES_CONFIG,
} from './models/i18n-locales-config.interface';
import { I18nLocale } from './models/i18n-locales.enum';

const I18N_DATA: I18nData = {
  files: {},
};

const I18N_DEEFAULT_STORAGE_KEY = 'customjsLocale';

@Injectable({
  providedIn: 'root',
})
export class I18nService<T> {
  loaded = new ReplaySubject();

  get locale() {
    return this.localeData.locale;
  }

  trans: T;

  private localeData = I18N_DATA;

  private store: any;

  private isBrowser: boolean;

  constructor(
    private appService: I18nAppConfigService,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(I18N_LOCALES_CONFIG) private i18nLocalesConfig: I18nLocalesConfig
  ) {
    this.initService();
  }

  setLocale(locale: I18nLocale, reloadApp = true) {
    this.persistLocale(locale);
    this.loadLocalOrFetchLocaleFromServer(locale, reloadApp);
  }

  get enabledLocales() {
    return [
      this.i18nLocalesConfig.defaultLocale,
      ...this.i18nLocalesConfig.extraLocales,
    ];
  }

  private populateKeysBeforeFetching() {
    this.trans = this.i18nLocalesConfig.translationKeys as any;
  }

  private detectPlatform() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private setStore() {
    if (this.isBrowser) {
      this.store = localStorage;
    } else {
      this.store = { getItem: () => {}, setItem: () => {} };
    }
  }

  private persistLocale(locale: I18nLocale) {
    this.setLocaleInMemory(locale);
    this.localeData.locale = locale;
  }

  private initService() {
    this.populateKeysBeforeFetching();
    this.detectPlatform();
    this.setStore();
    this.setInitialLocale();
  }

  private setInitialLocale() {
    if (this.localeData.locale) {
      this.setLocale(this.localeData.locale, false);
    } else {
      this.setStoredOrDefaultLocale();
    }
  }

  private setStoredOrDefaultLocale() {
    const storedLocale = this.getLocaleFromMemory();
    if (storedLocale) {
      this.setLocale(storedLocale);
    } else {
      this.setLocale(this.i18nLocalesConfig.defaultLocale);
    }
  }

  private getLocaleFromMemory() {
    const storedlocale = this.store.getItem(this.storageKey) as I18nLocale;
    const storedLocaleIsUsedByApp = this.enabledLocales.includes(storedlocale);
    if (storedLocaleIsUsedByApp) {
      return storedlocale;
    } else {
      return undefined;
    }
  }

  private setLocaleInMemory(locale: I18nLocale) {
    this.store.setItem(this.storageKey, locale);
  }

  private loadLocalOrFetchLocaleFromServer(
    locale: I18nLocale,
    reloadApp: boolean
  ) {
    const translations = this.localeData.files[locale];
    if (translations) {
      this.localeData.previousLocale = locale;
      if (reloadApp) {
        this.reloadApp();
      } else {
        this.loaded.next(true);
        this.setTranslations(translations);
      }
    } else {
      this.loadNewLocaleFile(locale);
    }
  }

  private setTranslations(translations) {
    this.trans = translations;
  }

  private loadNewLocaleFile(locale: I18nLocale) {
    this.i18nLocalesConfig.getTranslation(locale).then(content => {
      this.saveTranslationFileAndReload(locale, content.default);
    });
  }

  private saveTranslationFileAndReload(locale, content) {
    this.localeData.files[locale] = content;

    if (this.isBrowser) {
      this.reloadApp();
    } else {
      this.setTranslations(content);
    }
  }

  private reloadApp() {
    this.appService.reloadMainApp();
  }

  private get storageKey() {
    return this.i18nLocalesConfig.storagePath || I18N_DEEFAULT_STORAGE_KEY;
  }
}
