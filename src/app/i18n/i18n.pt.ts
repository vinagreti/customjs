import * as version from '@customjs/version/i18n/i18n.pt';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

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
      title: today =>
        `Brazil <br> <small style="color: green;">${today}</small>`,
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
      version: version.default,
    },
  },
};

export default ptBr;
