import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomBreadcrumbPageComponent } from './custom-breadcrumb-page.component';

const routes: Routes = [{ path: '', component: CustomBreadcrumbPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomBreadcrumbPageRoutingModule {}
