import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFilterPaginateSortPageComponent } from './custom-filter-paginate-sort-page.component';

const routes: Routes = [{ path: '', component: CustomFilterPaginateSortPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFilterPaginateSortPageRoutingModule {}
