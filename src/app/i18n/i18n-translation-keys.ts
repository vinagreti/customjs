import * as addressInput from 'projects/customjs/address-input/src/lib/i18n/custom-address-input.i18n';
import * as ask from 'projects/customjs/ask/src/lib/i18n/ask.i18n';
import * as list from 'projects/customjs/list/src/lib/i18n/custom-list.i18n';
import * as paginator from 'projects/customjs/paginator/src/lib/i18n/custom-paginator.i18n';
import * as version from 'projects/customjs/version/src/lib/i18n/version-service.i18n';
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
      addressInput: addressInput.default,
      ask: ask.default,
      version: version.default,
      list: list.default,
      paginator: paginator.default,
    },
  },
};

export type AppTranslationKeysMap = typeof AppTranslationKeys;
