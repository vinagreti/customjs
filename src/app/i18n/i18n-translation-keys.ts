import * as version from '@customjs/version/i18n/version-service.i18n';
import * as app from '../app.i18n';
import * as components from '../components/components.i18n';
import * as pages from '../pages/pages.i18n';
import * as services from '../services/services.i18n';

// DO NOT TYPE THIS OBJECT AS IT IS USED AS A TYPE ITSELF
export const AppTranslationKeys = {
  app: app.default,
  components: components.default,
  services: services.default,
  pages: pages.default,
  thirdParty: {
    customjs: {
      version: version.default,
    },
  },
};

export type AppTranslationKeysMap = typeof AppTranslationKeys;
