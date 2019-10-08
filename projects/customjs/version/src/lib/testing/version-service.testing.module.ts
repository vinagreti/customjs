import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AskTestingModule } from '@customjs/ask';
import { WsModule } from '@customjs/ws';
import { VersionService } from '../version.service';

@NgModule({
  declarations: [],
  imports: [
    AskTestingModule,
    WsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: false,
    }),
  ],
  providers: [VersionService],
})
export class VersionServiceTestingModule {}
