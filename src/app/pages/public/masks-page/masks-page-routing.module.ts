import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasksPageComponent } from './masks-page.component';

const routes: Routes = [{ path: '', component: MasksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasksPageRoutingModule {}
