import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CustomActionsModule } from 'projects/customjs/smart-layout/src/public-api';
import { CustomSmartLayoutPageRoutingModule } from './custom-smart-layout-page-routing.module';
import { CustomSmartLayoutPageComponent } from './custom-smart-layout-page.component';

@NgModule({
  declarations: [CustomSmartLayoutPageComponent],
  imports: [
    CommonModule,
    CustomSmartLayoutPageRoutingModule,
    CustomActionsModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class CustomSmartLayoutPageModule {}
