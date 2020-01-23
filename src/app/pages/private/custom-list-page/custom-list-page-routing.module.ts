import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomListPageComponent } from './custom-list-page.component';

const routes: Routes = [{ path: '', component: CustomListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomListPageRoutingModule {}
