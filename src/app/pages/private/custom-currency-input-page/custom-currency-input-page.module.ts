import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoContainerModule } from '@components/layout';
import { CustomjsCurrencyInputModule } from 'projects/customjs/currency-input/src/public-api';
import { CustomCurrencyInputPageRoutingModule } from './custom-currency-input-page-routing.module';
import { CustomCurrencyInputPageComponent } from './custom-currency-input-page.component';

@NgModule({
  declarations: [CustomCurrencyInputPageComponent],
  imports: [
    CommonModule,
    CustomCurrencyInputPageRoutingModule,
    DemoContainerModule,
    CustomjsCurrencyInputModule,
    FormsModule,
  ],
})
export class CustomCurrencyInputPageModule {}
