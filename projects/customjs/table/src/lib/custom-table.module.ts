import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material';
import { CustomTableColumnModule } from './custom-table-column/custom-table-column.module';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    CustomTableColumnModule,
    MatTableModule,
    FlexLayoutModule,
  ],
  exports: [CustomTableComponent, CustomTableColumnModule],
})
export class CustomTableModule {}
