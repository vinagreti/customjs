import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCepMaskPipe } from './custom-cep-mask.pipe';

@NgModule({
  declarations: [CustomCepMaskPipe],
  imports: [CommonModule],
  exports: [CustomCepMaskPipe],
})
export class CustomCepMaskModule {}
