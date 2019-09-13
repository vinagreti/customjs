import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AskComponent } from './ask.component';
import { AskModule } from './ask.module';
import { AskService } from './ask.service';

@NgModule({
  imports: [AskModule, NoopAnimationsModule],
  exports: [AskComponent],
  entryComponents: [AskComponent],
  providers: [AskService],
})
export class AskTestingModule {}
