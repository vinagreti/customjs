import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPaginatorPageComponent } from './custom-paginator-page.component';

const routes: Routes = [{ path: '', component: CustomPaginatorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomPaginatorPageRoutingModule {}
