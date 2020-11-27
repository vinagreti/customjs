import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomWsPageComponent } from './custom-ws-page.component';

const routes: Routes = [{ path: '', component: CustomWsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomWsPageRoutingModule {}
