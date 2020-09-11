import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomSmartLayoutPageComponent } from './custom-smart-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomSmartLayoutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSmartLayoutPageRoutingModule {}
