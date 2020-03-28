import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CustomjsCurrencyInputComponent } from './customjs-currency-input.component';

@NgModule({
  declarations: [CustomjsCurrencyInputComponent],
  imports: [CommonModule, MatInputModule, FormsModule],
  exports: [CustomjsCurrencyInputComponent],
})
export class CustomjsCurrencyInputModule {}
