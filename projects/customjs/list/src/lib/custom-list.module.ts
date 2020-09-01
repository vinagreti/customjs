import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    CustomListCardModule,
    CustomListFilterModule,
    CustomTableModule,
    CustomPaginatorModule,
  ],
})
export class CustomListModule {}
