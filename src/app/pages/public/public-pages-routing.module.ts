import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule),
  },
  {
    path: 'masks',
    loadChildren: () => import('./masks-page/masks-page.module').then(mod => mod.MasksPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPagesRoutingModule {}
