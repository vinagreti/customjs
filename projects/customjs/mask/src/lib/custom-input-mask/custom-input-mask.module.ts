import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomInputMaskDirective } from './custom-input-mask.directive';

@NgModule({
  declarations: [CustomInputMaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomInputMaskDirective],
})
export class CustomInputMaskModule {}
