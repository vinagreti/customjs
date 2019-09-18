import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

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
      title: today =>
        `United States <br> <small hehehe style="color: #BF0A30;">${today}</small>`,
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
      version: {
        title: 'Update available',
        question: 'Would you like to update your app?',
        confirm: 'Update',
        cancel: 'Later',
      },
    },
  },
};

export default enUs;
