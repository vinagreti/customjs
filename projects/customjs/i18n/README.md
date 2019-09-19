# Custom JS I18n

I18n library for Angular 2+ apps

## Instalation

### install de lib

`npm i @customjs/i18n`

## Usage

### 1 - Create the translations folder

Create a folder to store your translation files. We suggest you to create a i18n folter inside the app folder, so you avoid it to be bundled in asset files. But you can choos any folder inside the app

`/src/app/i18n/`

### 2 - Create the main translation file `AppTranslationKeys`

This file is used to tell the lib which translation we have and helps intelisense to autocomplete our translations and check for missing or unused translations.

Tt is very important that you **do not type the `AppTranslationKeys` object** as it is used as a type itself.

`/src/app/i18n/i18n-translation-keys.ts`

```typescript
// DO NOT TYPE THIS OBJECT AS IT IS USED AS A TYPE ITSELF
export const AppTranslationKeys = {};

export type AppTranslationKeysMap = typeof AppTranslationKey;
```

### 3 - Add translation to the appComponent (Create the app component i18n file)

This file is used to define which translations the AppComponent have and provide this definition for the global translation file so we can use the lint to define which translations are missing in the locale translations files.

`/src/app/app.i18n.ts`

```typescript
export default {
  title: '',
  welcome: () => '',
};
```

### 4 - Update the main translation file with the appComponent translations

Every time you create a new translation file you should add it to the AppTranslationKeys so the typing and checks will work as expected and no error are thrown

`/src/app/i18n/i18n-translation-keys.ts`

```typescript
import * as appComponentTranslations from '../app.i18n';

export const AppTranslationKeys = {
  app: appComponentTranslations.default, // HERE WE GO
};

export type AppTranslationKeysMap = typeof AppTranslationKey;
```

### 5 - Create a translation file for each locale

In this examplel we will use pt as our locale

`/src/app/i18n/i18n.en.ts`

```typescript
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

// Using AppTranslationKeysMap as TYPE is the JUMP OF THE CAT
export const ptBr: AppTranslationKeysMap = {
  app: {
    title: 'CustomJS',
    welcome: name => `Welcome ${name}`,
  },
};

export default ptBr;
```

`/src/app/i18n/i18n.pt.ts`

```typescript
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';

// Using AppTranslationKeysMap as TYPE is the JUMP OF THE CAT
export const ptBr: AppTranslationKeysMap = {
  app: {
    title: 'CustomJS',
    welcome: name => `Bem vindo ${name}`,
  },
};

export default ptBr;
```

### 6 - Import the Angular locales you will use (in our case we are going to use `[en, pt]` )

**English** is the **default** for Angular, so we **do not need to register it again**. We only need to register the `pt`.

```typescript
// LOAD THE ANGULAR LOCALE FILES (for each locale enabled)
import localePtExtra from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';

// REGISTER THE ANGULAR LOCALE FILES
registerLocaleData(localePt, I18nLocale.pt, localePtExtra);
```

### 7 - Import the i18n module into your application

In your AppModule or CoreModule (`the one who handle singletons`) import the i18nModule

```typescript
/**
 * THE I18N LOCALE LOADER
 * pointing to the folder created in the item 1
 *
 * It uses the es6 import to load the translations file on the fly
 */
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
      translationKeys: AppTranslationKeys, // creatd on item 2
    }),
  ],
})
```

### 8 - Use the translation in your view

`app.component.ts`

```typescript
constructor(public i18n: I18nService<AppTranslationKeysMap>) {}
```

`app.component.html`

```html
<h1>{{ i18n.trans.app.title }}</h1>
<p>{{ i18n.trans.app.welcome('Bruno') }}</p>
```

That will translate to

```html
<h1>CustomJS</h1>
<p>Welcome Bruno</p>
```

or

```html
<h1>CustomJS</h1>
<p>Bem vindo Bruno</p>
```

## Translating libraries

To translate libraries you only need to add the `@customjs/i18n` to the librarie dependency and create/provide the `translation keys`:

Se an example in: https://github.com/vinagreti/customjs/tree/master/projects/customjs/version

### 1 - Translations map

`/i18n/version-service.i18n.ts`

```typescript
export default {
  title: '',
  question: '',
  confirm: '',
  cancel: '',
};
```

### 2 - Create a local map reflecting the app one

To be able to ensure a unique location for the lib and avoid intelisense not fiding the final path

`version-service.ts`

```typescript
import * as translationFiles from './i18n/version-service.i18n';

...
export const VersionServiceTranslationKeys = {
  thirdParty: {
    customjs: {
      version: translationFiles.default, // it is the place where the translations will be placed in the client app
    },
  },
};

...

constructor(
  private i18n: I18nService<VersionServiceTranslationKeysMap> // USE IT HERE
) { }

```

### 3 - Using the translatable library

In your app, add the library's `i18n map` in your `AppTranslationKeysMap` and it will automatically type the translation files and warn you about the missing new library keys.

```typescript
import * as version from '@customjs/version/i18n/version-service.i18n';

...

export const AppTranslationKeys = {
  ...
  thirdParty: {
    customjs: {
      version: version.default, // same path as the item 2
    },
  },
};
```

### Provide some translations with your lib

It i a best practice to provide some pre translated files for common locations. In our example we provided `pt`.

`i18n.pt.ts`

```typescript
export default {
  title: 'Atualizacão disponível',
  question: 'Atualizar aplicativo?',
  confirm: 'Atualizar',
  cancel: 'Depois',
};
```

#### Use the pre translated file in your app

In the translation file (`that on warning about missing library translations`), you just need to provide the pra translated file:

`/src/app/i18n/i18n-translation-keys.ts`

```typescript
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
// `version` IS OUR PRE TRANSLATED DATA
import * as version from '@customjs/version/i18n/i18n.pt';

export const ptBr: AppTranslationKeysMap = {
  ...
  thirdParty: {
    customjs: {
      version: version.default,
    },
  },
};

export default ptBr;
```
