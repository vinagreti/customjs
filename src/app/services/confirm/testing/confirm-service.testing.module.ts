import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { ConfirmServiceModule } from './../confirm-service.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmServiceModule,
    NoopAnimationsModule,
    I18nServiceTestingModule.forRoot(AppTranslationKeys),
  ],
})
export class ConfirmServiceTestingModule {}
