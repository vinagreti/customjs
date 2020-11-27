import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomI18nPageRoutingModule } from './custom-i18n-page-routing.module';
import { CustomI18nPageComponent } from './custom-i18n-page.component';

@NgModule({
  declarations: [CustomI18nPageComponent],
  imports: [CommonModule, CustomI18nPageRoutingModule, DemoContainerModule],
})
export class CustomI18nPageModule {}
