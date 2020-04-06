import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
import * as ask from 'projects/customjs/ask/src/lib/i18n/i18n.pt';
import * as list from 'projects/customjs/list/src/lib/i18n/i18n.pt';
import * as paginator from 'projects/customjs/paginator/src/lib/i18n/i18n.pt';
import * as version from 'projects/customjs/version/src/lib/i18n/i18n.pt';

export const ptBr: AppTranslationKeysMap = {
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
      login: 'Entrar',
    },
    appWrapperPrivate: {
      title: 'CustomJs',
      dashboard: 'Dashboard',
      logout: 'Sair',
    },
  },
  pages: {
    home: {
      title: today => `Brazil <br> <small style="color: green;">${today}</small>`,
      subtitle: 'Aproveite sua estadia.',
    },
    login: {
      login: 'Entrar',
    },
  },
  services: {
    confirm: {
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      reject: 'Rejeitar',
    },
  },
  thirdParty: {
    customjs: {
      ask: ask.default,
      version: version.default,
      list: list.default,
      paginator: paginator.default,
    },
  },
};

export default ptBr;
