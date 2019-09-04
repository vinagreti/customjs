import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nAppConfigService } from './i18n-app-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    I18nAppConfigService
  ],
})
export class I18nAppConfigModule { }
