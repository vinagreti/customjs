import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCpfInputMaskDirective } from './custom-cpf-input-mask.directive';

@NgModule({
  declarations: [CustomCpfInputMaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomCpfInputMaskDirective],
})
export class CustomCpfInputMaskModule {}
