import { ChangeDetectionStrategy, Component } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
import { AuthService } from '@services/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  form: any = {};

  constructor(private authService: AuthService, public i18n: I18nService<AppTranslationKeysMap>) {}

  login() {
    this.authService.login('tokenxyz');
  }
}
