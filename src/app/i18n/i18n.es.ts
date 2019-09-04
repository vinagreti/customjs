import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

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
      title: today =>
        `Spain <br> <small style="color: #FFC400;">${today}</small>`,
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
};

export default es;
