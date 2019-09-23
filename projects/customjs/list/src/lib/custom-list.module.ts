import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CustomPaginatorModule } from '@customjs/paginator';
import { CustomTableModule } from '@customjs/table';
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
    FlexLayoutModule,
    CustomPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CustomListComponent,
    CustomTableModule,
    CustomListCardModule,
    CustomListFilterModule,
    CustomPaginatorModule,
  ],
})
export class CustomListModule {}
