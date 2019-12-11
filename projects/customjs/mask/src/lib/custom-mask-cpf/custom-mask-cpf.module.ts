import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaskCpfDirective } from './custom-mask-cpf.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomMaskCpfDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomMaskCpfDirective],
})
export class CustomMaskCpfModule {}
