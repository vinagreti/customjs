import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomI18nPageComponent } from './custom-i18n-page.component';

const routes: Routes = [{ path: '', component: CustomI18nPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomI18nPageRoutingModule {}
