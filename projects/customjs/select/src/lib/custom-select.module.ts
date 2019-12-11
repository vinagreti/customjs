import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { FormsModule } from '@angular/forms';
import { CustomSingleSelectModule } from './custom-single-select/custom-single-select.module';
import { CustomSelectOptionModule } from './custom-select-option/custom-select-option.module';

@NgModule({
  declarations: [CustomSelectComponent],
  imports: [CommonModule, FormsModule, CustomSingleSelectModule, CustomSelectOptionModule],
  exports: [CustomSelectComponent, CustomSelectOptionModule],
})
export class CustomSelectModule {}
