import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCepInputMaskDirective } from './custom-cep-input-mask.directive';

@NgModule({
  declarations: [CustomCepInputMaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomCepInputMaskDirective],
})
export class CustomCepInputMaskModule {}
