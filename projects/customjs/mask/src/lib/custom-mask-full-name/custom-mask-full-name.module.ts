import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaskFullNameDirective } from './custom-mask-full-name.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomMaskFullNameDirective],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CustomMaskFullNameDirective]
})
export class CustomMaskFullNameModule { }
