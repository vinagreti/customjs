import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AskModule } from './ask.module';

@NgModule({
  imports: [AskModule, NoopAnimationsModule],
})
export class AskTestingModule {}
