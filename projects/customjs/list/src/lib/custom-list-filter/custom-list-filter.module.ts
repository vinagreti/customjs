import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { CustomListFilterComponent } from './custom-list-filter.component';

@NgModule({
  declarations: [CustomListFilterComponent],
  imports: [CommonModule, MatButtonModule, FormsModule, FlexLayoutModule],
  exports: [CustomListFilterComponent],
})
export class CustomListFilterModule {}
