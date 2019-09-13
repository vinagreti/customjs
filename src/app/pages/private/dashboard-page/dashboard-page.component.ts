import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AskService } from '@customjs/ask';
import { WsOpenConnection, WsService } from '@customjs/ws';

const WS_HOST = 'wss://echo.websocket.org';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  wsConnection: WsOpenConnection<any>;

  constructor(private askService: AskService, private wsClient: WsService) {}

  ngOnInit() {
    this.wsConnection = this.wsClient.connect(WS_HOST);
  }

  sendMessage() {
    this.wsConnection.channel.send('test');
  }

  onAsk() {
    this.askService
      .ask({
        title: 'titulo',
        showReject: true,
      })
      .subscribe(res => {
        console.log('ask res', res);
      });
  }
}
