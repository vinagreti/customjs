import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTableModule } from 'projects/customjs/table/src/public-api';
import { CustomTablePageRoutingModule } from './custom-table-page-routing.module';
import { CustomTablePageComponent } from './custom-table-page.component';

@NgModule({
  declarations: [CustomTablePageComponent],
  imports: [CommonModule, CustomTablePageRoutingModule, CustomTableModule],
})
export class CustomTablePageModule {}
