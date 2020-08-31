import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AskService } from '@customjs/ask';

@Component({
  selector: 'app-custom-ask-page',
  templateUrl: './custom-ask-page.component.html',
  styleUrls: ['./custom-ask-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAskPageComponent {
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
