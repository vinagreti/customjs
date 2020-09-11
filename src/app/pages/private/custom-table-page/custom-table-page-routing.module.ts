import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTablePageComponent } from './custom-table-page.component';

const routes: Routes = [{ path: '', component: CustomTablePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomTablePageRoutingModule {}
