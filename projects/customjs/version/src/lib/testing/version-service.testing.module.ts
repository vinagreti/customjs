import { NgModule } from '@angular/core';
import { AskTestingModule } from '@customjs/ask';
import { WsModule } from '@customjs/ws';
import { VersionService } from '../version.service';

@NgModule({
  declarations: [],
  imports: [AskTestingModule, WsModule],
  providers: [VersionService],
})
export class VersionServiceTestingModule {}
