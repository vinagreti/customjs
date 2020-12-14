import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomRgInputMaskDirective } from './custom-rg-input-mask.directive';

@NgModule({
  declarations: [CustomRgInputMaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomRgInputMaskDirective],
})
export class CustomRgInputMaskModule { }
