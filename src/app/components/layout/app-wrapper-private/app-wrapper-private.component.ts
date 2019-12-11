import { ChangeDetectionStrategy, Component } from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { AppTranslationKeysMap } from '@i18n/i18n-translation-keys';
import { AuthService } from '@services/auth';

@Component({
  selector: 'app-wrapper-private',
  templateUrl: './app-wrapper-private.component.html',
  styleUrls: ['./app-wrapper-private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperPrivateComponent {
  constructor(private authService: AuthService, public i18n: I18nService<AppTranslationKeysMap>) {}

  logout() {
    this.authService.logout();
  }
}
