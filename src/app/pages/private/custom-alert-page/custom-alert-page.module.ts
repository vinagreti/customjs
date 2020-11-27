import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomBackButtonModule } from '@components/custom-back-button';
import { DemoContainerModule } from '@components/layout';
import { AlertModule } from '@customjs/alert';
import { CustomAlertPageRoutingModule } from './custom-alert-page-routing.module';
import { CustomAlertPageComponent } from './custom-alert-page.component';

@NgModule({
  declarations: [CustomAlertPageComponent],
  imports: [
    CommonModule,
    CustomAlertPageRoutingModule,
    AlertModule,
    CustomBackButtonModule,
    DemoContainerModule,
  ],
})
export class CustomAlertPageModule {}
