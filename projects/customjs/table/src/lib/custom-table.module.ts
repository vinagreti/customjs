import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CustomActionsModule } from '@customjs/smart-layout';
import { CustomTableColumnModule } from './custom-table-column/custom-table-column.module';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    CustomTableColumnModule,
    MatTableModule,
    FlexLayoutModule,
    CustomActionsModule,
    MatCheckboxModule,
  ],
  exports: [CustomTableComponent, CustomTableColumnModule, CustomActionsModule],
})
export class CustomTableModule {}
