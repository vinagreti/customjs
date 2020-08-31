import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAskPageComponent } from './custom-ask-page.component';

const routes: Routes = [{ path: '', component: CustomAskPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomAskPageRoutingModule {}
