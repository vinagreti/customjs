import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
import * as list from 'projects/customjs/list/src/lib/i18n/i18n.en';
import * as paginator from 'projects/customjs/paginator/src/lib/i18n/i18n.en';
import * as version from 'projects/customjs/version/src/lib/i18n/i18n.en';

export const enUs: AppTranslationKeysMap = {
  app: {
    title: 'CustomJs',
    name: 'CustomJs',
  },
  components: {
    appWrapperNonAuth: {
      title: 'CustomJs',
    },
    appWrapperPublic: {
      title: 'CustomJs',
      login: 'Login',
    },
    appWrapperPrivate: {
      title: 'CustomJs',
      dashboard: 'Dashboard',
      logout: 'Logout',
    },
  },
  pages: {
    home: {
      title: today => `United States <br> <small hehehe style="color: #BF0A30;">${today}</small>`,
      subtitle: 'Enjoy your stay.',
    },
    login: {
      login: 'Loin',
    },
  },
  services: {
    confirm: {
      cancel: 'Cancel',
      confirm: 'Confirm',
      reject: 'Reject',
    },
  },
  thirdParty: {
    customjs: {
      version: version.default,
      list: list.default,
      paginator: paginator.default,
    },
  },
};

export default enUs;
