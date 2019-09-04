import * as appComponentTranslations from '../app.i18n';
import * as componentsTranslations from '../components/components.i18n';
import * as pagesTranslations from '../pages/pages.i18n';
import * as servicesTranslations from '../services/services.i18n';

export const AppTranslationKeys = {
  app: appComponentTranslations.default,
  components: componentsTranslations.default,
  services: servicesTranslations.default,
  pages: pagesTranslations.default,
};

export type AppTranslationKeysMap = typeof AppTranslationKeys;
