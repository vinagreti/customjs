import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAddressInputPageComponent } from './custom-address-input-page.component';

const routes: Routes = [{ path: '', component: CustomAddressInputPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomAddressInputPageRoutingModule {}
