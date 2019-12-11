import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaskPhoneDirective } from './custom-mask-phone.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomMaskPhoneDirective],
  imports: [CommonModule, FormsModule],
  exports: [CustomMaskPhoneDirective],
})
export class CustomMaskPhoneModule {}
