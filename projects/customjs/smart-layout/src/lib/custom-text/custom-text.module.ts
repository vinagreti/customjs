import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextComponent } from './custom-text.component';

@NgModule({
  declarations: [CustomTextComponent],
  imports: [CommonModule],
  exports: [CustomTextComponent],
})
export class CustomTextModule {}
