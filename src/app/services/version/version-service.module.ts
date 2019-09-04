import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfirmServiceModule } from '@services/confirm';
import { CustomWsClientModule } from '@services/ws-client';
import { VersionService } from './version.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmServiceModule,
    CustomWsClientModule,
  ],
  providers: [
    VersionService
  ]
})
export class VersionServiceModule {

  constructor(
    private versionService: VersionService,
    @Optional() @SkipSelf() parentModule: VersionServiceModule,
  ) {
    if (parentModule) {
      throw new Error(
        'VersionServiceModule is already loaded. Import it in the CoreModule only');
    }
  }

}
