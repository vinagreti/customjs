import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomMasksPageComponent } from './custom-masks-page.component';

const routes: Routes = [{ path: '', component: CustomMasksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomMasksPageRoutingModule {}
