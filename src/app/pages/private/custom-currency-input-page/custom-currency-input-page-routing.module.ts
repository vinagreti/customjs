import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCurrencyInputPageComponent } from './custom-currency-input-page.component';

const routes: Routes = [{ path: '', component: CustomCurrencyInputPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomCurrencyInputPageRoutingModule {}
