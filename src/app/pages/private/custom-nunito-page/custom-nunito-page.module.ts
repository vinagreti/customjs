import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomNunitoPageRoutingModule } from './custom-nunito-page-routing.module';
import { CustomNunitoPageComponent } from './custom-nunito-page.component';

@NgModule({
  declarations: [CustomNunitoPageComponent],
  imports: [CommonModule, CustomNunitoPageRoutingModule, DemoContainerModule],
})
export class CustomNunitoPageModule {}
