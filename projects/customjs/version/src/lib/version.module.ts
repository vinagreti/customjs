import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AskModule } from '@customjs/ask';
import { I18nModule } from '@customjs/i18n';
import { WsModule } from '@customjs/ws';
import { VersionService } from './version.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AskModule, WsModule, I18nModule],
  providers: [VersionService],
})
export class VersionModule {
  constructor(
    private versionService: VersionService,
    @Optional() @SkipSelf() parentModule: VersionModule,
  ) {
    if (parentModule) {
      throw new Error('VersionModule is already loaded. Import it in the CoreModule only');
    }
  }
}
