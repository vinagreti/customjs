import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSingleSelectComponent } from './custom-single-select.component';
import { MatAutocompleteModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomSelectOptionModule } from './../custom-select-option/custom-select-option.module';

@NgModule({
  declarations: [CustomSingleSelectComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CustomSelectOptionModule,
  ],
  exports: [CustomSingleSelectComponent],
})
export class CustomSingleSelectModule {}
