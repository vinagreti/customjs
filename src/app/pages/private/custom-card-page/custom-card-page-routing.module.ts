import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCardPageComponent } from './custom-card-page.component';

const routes: Routes = [{ path: '', component: CustomCardPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomCardPageRoutingModule {}
