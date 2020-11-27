import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomGenericHttpPageComponent } from './custom-generic-http-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomGenericHttpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomGenericHttpPageRoutingModule {}
