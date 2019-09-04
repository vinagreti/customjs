import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { NavbarComponent } from '../navbar.component';
import { NavbarModule } from '../navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    RouterTestingModule,
    I18nServiceTestingModule.forRoot(AppTranslationKeys),
  ],
  exports: [NavbarComponent],
})
export class NavbarTestingModule {}
