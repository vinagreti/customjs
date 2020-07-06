import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomTypeableCodeInputMaskDirective } from './custom-typeable-code-input-mask.directive';

@NgModule({
  declarations: [CustomTypeableCodeInputMaskDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomTypeableCodeInputMaskDirective],
})
export class CustomTypeableCodeInputMaskModule {}
