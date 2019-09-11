# Custom JS I18n

I18n library for Angular 2+ apps

## Instalation

### install de lib

`npm i @customjs/i18n`

### Configure app bootstrap

On the `main.ts`, add the `DOMContentLoaded` around the bootstrap call as following (it is ready for use with universal apps).

Universal apps already have this setup.

```typescript
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
```

## Usage

### 1 - Create the translations folder

Create a folder to store your translation files. We suggest you to create a i18n folter inside the app folder, so you avoid it to be bundled in asset files. But you can choos any folder inside the app

`/src/app/i18n/`

### 2 - Create the main translation file

This file is used to tell the lib which translation we have and helps intelisense to autocomplete our translations

`/src/app/i18n/i18n-translation-keys.ts`

```typescript
// DO NOT TYPE THIS OBJECT AS IT IS USED AS A TYPE ITSELF
export const AppTranslationKeys = {};

export type AppTranslationKeysMap = typeof AppTranslationKey;
```

### 3 - Create the app component i18n file (add translation to the appComponent)

This file is used to define which translations the AppComponent have and provide this definition for the global translation file so we can use the lint to define which translations are missing in the locale translations files.

`/src/app/app.i18n.ts`

```typescript
export default {
  title: '',
  name: () => '',
};
```

### 4 - Update the main translation file with the appComponent translations

Every time you create a new translation file you should add it to the AppTranslationKeys so the typing and checks will work as expected and no error are thrown

`/src/app/i18n/i18n-translation-keys.ts`

```typescript
import * as appComponentTranslations from '../app.i18n';

export const AppTranslationKeys = {
  app: appComponentTranslations.default,
};

export type AppTranslationKeysMap = typeof AppTranslationKey;
```

### 5 - Create a translation file for each locale

In this examplel we will use pt as our locale

`/src/app/i18n/i18n.pt.ts`

```typescript
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

export const ptBr: AppTranslationKeysMap = {
  app: {
    title: 'CustomJS',
    name: name`Welcome ${name}`,
  },
};

export default ptBr;
```

### 6 - Import the i18n module into your application

In your appModule or CoreModule (the one who handle singletons) import the i18nModule

```typescript
// LOAD THE ANGULAR LOCALE FILES (for each locale enabled)
import localePtExtra from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';

// REGISTER THE ANGULAR LOCALE FILES
registerLocaleData(localePt, I18nLocale.pt, localePtExtra);

// THE I18N LOCALE LOADER (item 1)
export function getTranslation(locale: I18nLocale) {
  return import(`./../i18n/i18n.${locale}.ts`);
}

@NgModule({
  declarations: [],
  imports: [
    ...
    I18nModule.forRoot({
      defaultLocale: I18nLocale.pt,
      extraLocales: [],
      getTranslation,
      translationKeys: AppTranslationKeys, // item 2
    }),
  ],
})
```

### 7 - Use the translation in your view

`app.component.ts`

```typescript
constructor(public i18n: I18nService<AppTranslationKeysMap>) {}
```

`app.component.html`

```html
<h1>{{ i18n.trans.app.title }}</h1>
<p>{{ i18n.trans.app.name('Bruno') }}</p>
```

That will translate to

```html
<h1>CustomJS</h1>
<p>Welcome Bruno</p>
```
