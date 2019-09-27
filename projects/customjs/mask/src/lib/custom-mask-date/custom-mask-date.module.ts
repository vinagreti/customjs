import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaskDateDirective } from './custom-mask-date.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomMaskDateDirective],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CustomMaskDateDirective]
})
export class CustomMaskDateModule { }
