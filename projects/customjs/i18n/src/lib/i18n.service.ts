import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { I18nLocalesConfig, I18N_LOCALES_CONFIG } from './models/i18n-locales-config.interface';
import { I18nLocale } from './models/i18n-locales.enum';

const I18N_DEEFAULT_STORAGE_KEY = 'customjsLocale';

@Injectable({
  providedIn: 'root',
})
export class I18nService<T> {
  loaded = new ReplaySubject();

  locale: I18nLocale;

  enabledLocales: I18nLocale[];

  trans: T;

  private store: any;

  private storageKey: string;

  constructor(@Inject(I18N_LOCALES_CONFIG) private i18nLocalesConfig: I18nLocalesConfig, @Inject(DOCUMENT) private document: any) {
    this.mapTranslationKeys();
  }

  setLocale(locale: I18nLocale) {
    if (locale !== this.locale) {
      this.persistLocale(locale);
      this.reloadApp();
    }
  }

  initService() {
    this.setStore();
    this.setStorageKey();
    this.detectetEnabledLocales();
    this.loadLocaleFromMemory();
    this.setHtmlLanguage();
    return this.loadTranslationFile();
  }

  private setHtmlLanguage() {
    this.document.documentElement.lang = this.locale;
  }

  private mapTranslationKeys() {
    this.setTranslations(this.i18nLocalesConfig.translationKeys);
  }

  private setStore() {
    try {
      this.store = localStorage;
    } catch {
      this.store = { getItem: () => {}, setItem: () => {} };
    }
  }

  private setStorageKey() {
    this.storageKey = this.i18nLocalesConfig.storagePath || I18N_DEEFAULT_STORAGE_KEY;
  }

  private detectetEnabledLocales() {
    this.enabledLocales = [
      this.i18nLocalesConfig.defaultLocale,
      ...this.i18nLocalesConfig.extraLocales,
    ];
  }

  private loadLocaleFromMemory() {
    const storedlocale = this.store.getItem(this.storageKey) as I18nLocale;
    const storedLocaleIsUsedByApp = this.enabledLocales.includes(storedlocale);
    if (storedLocaleIsUsedByApp) {
      this.locale = storedlocale;
    } else {
      this.locale = this.i18nLocalesConfig.defaultLocale;
    }
  }

  private loadTranslationFile() {
    return new Promise((resolve, reject) => {
      this.i18nLocalesConfig.getTranslation(this.locale).then(
        content => {
          this.setTranslations(content.default);
          resolve();
        },
        err => reject,
      );
    });
  }

  private setTranslations(translations) {
    this.trans = translations;
  }

  private persistLocale(locale: I18nLocale) {
    this.setLocaleInMemory(locale);
    this.locale = locale;
  }

  private reloadApp() {
    window.location.reload();
  }

  private setLocaleInMemory(locale: I18nLocale) {
    this.store.setItem(this.storageKey, locale);
  }
}
