import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomCardModule } from 'projects/customjs/card/src/public-api';
import { CustomCardPageRoutingModule } from './custom-card-page-routing.module';
import { CustomCardPageComponent } from './custom-card-page.component';

@NgModule({
  declarations: [CustomCardPageComponent],
  imports: [CommonModule, CustomCardPageRoutingModule, DemoContainerModule, CustomCardModule],
})
export class CustomCardPageModule {}
