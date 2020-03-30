import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCpfMaskPipe } from './custom-cpf-mask.pipe';

@NgModule({
  declarations: [CustomCpfMaskPipe],
  imports: [CommonModule],
  exports: [CustomCpfMaskPipe],
})
export class CustomCpfMaskModule {}
