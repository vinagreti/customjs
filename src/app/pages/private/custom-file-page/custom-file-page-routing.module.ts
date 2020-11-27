import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFilePageComponent } from './custom-file-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomFilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFilePageRoutingModule {}
