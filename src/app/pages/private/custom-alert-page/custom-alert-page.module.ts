import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from '@customjs/alert';
import { CustomAlertPageRoutingModule } from './custom-alert-page-routing.module';
import { CustomAlertPageComponent } from './custom-alert-page.component';

@NgModule({
  declarations: [CustomAlertPageComponent],
  imports: [CommonModule, CustomAlertPageRoutingModule, AlertModule],
})
export class CustomAlertPageModule {}
