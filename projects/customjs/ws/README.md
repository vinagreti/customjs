# WebSocket Service

`import { WsModule } from '@customjs/ws';`

This module provides a service to communicate with `WebSockets` in a reactive way.

The service handles error, close, receiveing and sending messages.

## Usage

Javascript

```javascript

  const WS_HOST = 'ws://echo.websocket.org';

  ...

  wsConnection: OpenConnection<any>;

  constructor(
    private ws: WsService
  ) { }

  ngOnInit() {
    this.wsConnection = this.ws.connect(WS_HOST);
  }

  sendMessage() {
    if (this.wsConnection && this.messageToSend) {
      this.wsConnection.channel.send(this.messageToSend);
      this.messageToSend = undefined;
    }
  }

```

Html

```html
<div *ngIf="(wsConnection.message | async) as message">
  <h3>Last message</h3>
  {{ message }}
</div>
```
