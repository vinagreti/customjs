import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AskService } from '@customjs/ask';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  constructor(private askService: AskService) {}

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
