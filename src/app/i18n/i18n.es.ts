import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
import * as addressInput from 'projects/customjs/address-input/src/lib/i18n/i18n.es';
import * as ask from 'projects/customjs/ask/src/lib/i18n/i18n.es';
import * as list from 'projects/customjs/list/src/lib/i18n/i18n.es';
import * as paginator from 'projects/customjs/paginator/src/lib/i18n/i18n.es';
import * as version from 'projects/customjs/version/src/lib/i18n/i18n.es';

export const es: AppTranslationKeysMap = {
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
      title: today => `Spain <br> <small style="color: #FFC400;">${today}</small>`,
      subtitle: 'Aprovecha tu estadia.',
    },
    login: {
      login: 'Loin',
    },
  },
  services: {
    confirm: {
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      reject: 'Rechazar',
    },
  },
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

export default es;
