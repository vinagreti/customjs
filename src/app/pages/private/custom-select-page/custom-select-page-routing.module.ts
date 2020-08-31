import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomSelectPageComponent } from './custom-select-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomSelectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSelectPageRoutingModule {}
