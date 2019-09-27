import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaskEmailDirective } from './custom-mask-email.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomMaskEmailDirective],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CustomMaskEmailDirective]
})
export class CustomMaskEmailModule { }
