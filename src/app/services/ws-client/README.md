# Custom WebSocket Client

This module provides a service to communicate with `WebSockets` in a reactive way.

The service handles error, close, receiveing and sending messages.

## Usage

Javascript

```javascript

  customWsConnection: OpenConnection;

  constructor(
    private wsClient: CustomWsClientService
  ) { }

  ngOnInit() {
    this.customWsConnection = this.wsClient.connect(WS_HOST);
  }

  sendMessage() {
    if (this.customWsConnection && this.messageToSend) {
      this.customWsConnection.channel.send(this.messageToSend);
      this.messageToSend = undefined;
    }
  }

```


Html
```html
  <div *ngIf="(customWsConnection.messages | async) as messages">

    <h3>Last message</h3>
    {{ messages[0] }}

    <h4>Messages log</h4>
    <p *ngFor="let message of messages">
      {{message}}
    </p>

  </div>
```
