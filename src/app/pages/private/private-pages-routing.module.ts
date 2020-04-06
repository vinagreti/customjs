import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-page/dashboard-page.module').then(mod => mod.DashboardPageModule),
  },
  {
    path: 'custom-list',
    loadChildren: () =>
      import('./custom-list-page/custom-list-page.module').then(mod => mod.CustomListPageModule),
  },
  {
    path: 'custom-masks',
    loadChildren: () =>
      import('./custom-masks-page/custom-masks-page.module').then(mod => mod.CustomMasksPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePagesRoutingModule {}
