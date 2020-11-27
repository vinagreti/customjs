import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomAddressInputModule } from 'projects/customjs/address-input/src/public-api';
import { CustomAddressInputPageRoutingModule } from './custom-address-input-page-routing.module';
import { CustomAddressInputPageComponent } from './custom-address-input-page.component';

@NgModule({
  declarations: [CustomAddressInputPageComponent],
  imports: [
    CommonModule,
    CustomAddressInputPageRoutingModule,
    DemoContainerModule,
    CustomAddressInputModule,
  ],
})
export class CustomAddressInputPageModule {}
