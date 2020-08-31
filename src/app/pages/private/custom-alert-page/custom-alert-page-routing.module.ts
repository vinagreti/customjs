import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAlertPageComponent } from './custom-alert-page.component';

const routes: Routes = [{ path: '', component: CustomAlertPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomAlertPageRoutingModule {}
