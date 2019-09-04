import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { NgxsModule } from '@ngxs/store';
import { ConfirmServiceTestingModule } from '@services/confirm/testing';
import { VersionServiceModule } from '../version-service.module';
import { VersionState } from '../version.state';

@NgModule({
  declarations: [],
  imports: [
    VersionServiceModule,
    HttpClientTestingModule,
    NgxsModule.forRoot([VersionState]),
    ConfirmServiceTestingModule,
    I18nServiceTestingModule.forRoot(AppTranslationKeys),
  ],
})
export class VersionServiceTestingModule {}
