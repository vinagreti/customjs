/**
 * The translation keys structure
 *
 * example:
 *
 * {app: {title: 'AppTitle', version: (v) => `Version ${v}`}}
 */
export type I18nTranslationFunction = (...data: any) => string;

export interface I18nTranslationKeys {
  [key: string]: I18nTranslationKeys | string | I18nTranslationFunction;
}
