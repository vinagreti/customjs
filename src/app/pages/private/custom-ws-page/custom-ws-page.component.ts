import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WsOpenConnection, WsService } from '@customjs/ws';

const WS_HOST = 'wss://echo.websocket.org';

@Component({
  selector: 'app-custom-ws-page',
  templateUrl: './custom-ws-page.component.html',
  styleUrls: ['./custom-ws-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomWsPageComponent implements OnInit {
  wsConnection: WsOpenConnection<any>;

  constructor(private wsClient: WsService) {}

  ngOnInit() {
    this.wsConnection = this.wsClient.connect(WS_HOST);
  }

  sendMessage() {
    this.wsConnection.channel.send('test');
  }
}
