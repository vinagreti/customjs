import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertService } from '@customjs/alert';

@Component({
  selector: 'app-custom-alert-page',
  templateUrl: './custom-alert-page.component.html',
  styleUrls: ['./custom-alert-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAlertPageComponent {
  constructor(private alertService: AlertService) {}

  onAlert() {
    this.alertService
      .alert({
        action: 'action',
        duration: 5,
        message: 'message',
        color: 'warn',
      })
      .onAction()
      .subscribe(res => {
        console.log('alert res', res);
      });
  }
}
