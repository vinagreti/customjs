import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomNunitoPageComponent } from './custom-nunito-page.component';

const routes: Routes = [{ path: '', component: CustomNunitoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomNunitoPageRoutingModule {}
