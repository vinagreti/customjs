import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomSelectOptionModule } from './../custom-select-option/custom-select-option.module';
import { CustomSingleSelectComponent } from './custom-single-select.component';

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
