import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DemoContainerModule } from '@components/layout';
import { CustomListModule } from 'projects/customjs/list/src/lib/custom-list.module';
import { CustomFilterPaginateSortPageRoutingModule } from './custom-filter-paginate-sort-page-routing.module';
import { CustomFilterPaginateSortPageComponent } from './custom-filter-paginate-sort-page.component';

@NgModule({
  declarations: [CustomFilterPaginateSortPageComponent],
  imports: [
    CommonModule,
    CustomFilterPaginateSortPageRoutingModule,
    CustomListModule,
    FormsModule,
    MatInputModule,
    DemoContainerModule,
  ],
})
export class CustomFilterPaginateSortPageModule {}
