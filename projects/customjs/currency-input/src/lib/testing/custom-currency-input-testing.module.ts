import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomjsCurrencyInputComponent } from '../customjs-currency-input.component';
import { CustomjsCurrencyInputModule } from '../customjs-currency-input.module';

@NgModule({
  imports: [CustomjsCurrencyInputModule, NoopAnimationsModule],
  exports: [CustomjsCurrencyInputComponent],
})
export class CustomjsCurrencyInputTestingModule {}
