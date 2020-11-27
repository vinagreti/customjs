import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class GenericHttpModule {
  constructor(@Optional() @SkipSelf() parentModule: GenericHttpModule) {
    if (parentModule) {
      throw new Error('GenericHttpModule is already loaded. Import it in the CoreModule only');
    }
  }
}
