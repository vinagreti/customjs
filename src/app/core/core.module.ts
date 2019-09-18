import { CommonModule, registerLocaleData } from '@angular/common';
/*
  EXTRAS LOCALES
  defaults to []
 */
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeEsExtra from '@angular/common/locales/extra/es';
import localePtExtra from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { I18nLocale, I18nModule } from '@customjs/i18n';
import { VersionModule } from '@customjs/version';
import { AppTranslationKeys } from '../i18n/i18n-translation-keys';
import { AppReduxModule } from './redux/ngxs-singleton.module';

/** IMPORT LOCALES USED BY THE APP */
registerLocaleData(localePt, I18nLocale.pt, localePtExtra);
registerLocaleData(localeEn, I18nLocale.en, localeEnExtra);
registerLocaleData(localeEs, I18nLocale.es, localeEsExtra);

export function getTranslation(locale: I18nLocale) {
  return import(`./../i18n/i18n.${locale}.ts`);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppReduxModule, // must be before any other module that uses store
    I18nModule.forRoot({
      defaultLocale: I18nLocale.pt,
      extraLocales: [I18nLocale.en, I18nLocale.es],
      getTranslation,
      translationKeys: AppTranslationKeys,
    }),
    VersionModule,
  ],
})
export class CoreModule {}
