import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableColumnComponent } from './custom-table-column.component';

@NgModule({
  declarations: [CustomTableColumnComponent],
  imports: [CommonModule],
  exports: [CustomTableColumnComponent],
})
export class CustomTableColumnModule {}
