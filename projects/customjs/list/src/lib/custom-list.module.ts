import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CustomPaginatorModule } from '@customjs/paginator';
import { CustomActionsModule } from '@customjs/smart-layout';
import { CustomTableModule } from '@customjs/table';
// import { CustomTableModule } from 'projects/customjs/table/src/public-api';
import { CustomListCardModule } from './custom-list-card/custom-list-card.module';
import { CustomListFilterModule } from './custom-list-filter/custom-list-filter.module';
import { CustomListComponent } from './custom-list.component';

@NgModule({
  declarations: [CustomListComponent],
  imports: [
    CommonModule,
    CustomTableModule,
    CustomListCardModule,
    CustomListFilterModule,
    CustomActionsModule,
    CustomPaginatorModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    CustomListComponent,
    CustomListCardModule,
    CustomListFilterModule,
    CustomTableModule,
    CustomPaginatorModule,
    CustomActionsModule,
  ],
})
export class CustomListModule {}
