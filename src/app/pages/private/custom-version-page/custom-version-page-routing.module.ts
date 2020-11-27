import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomVersionPageComponent } from './custom-version-page.component';

const routes: Routes = [{ path: '', component: CustomVersionPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomVersionPageRoutingModule {}
