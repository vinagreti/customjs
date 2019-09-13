# Custom JS Ask

Ask library for Angular 2+ apps

## Instalation

### install de lib

`npm i @customjs/ask`

## Usage

Import the `AskModule` and user the service as you wish.

```typescript
import { AskModule } from '@customjs/ask';

...
imports: [
  ...,
  AskModule
],
...
```

```typescript
import { AskService } from '@customjs/ask';
...

  constructor(
    private askService: AskService
  ) {}

  askName() {
    this.askService.ask({
      title: 'Cookies';
      question?: 'Would you like to use cookies?';
      confirm?: 'YES';
      reject?: 'NO';
      cancel?: 'LATER';
      showReject?: true;
      hideCancel?: false;
      type?: 'info';
    })
  }
```
