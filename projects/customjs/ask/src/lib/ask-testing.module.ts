import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AskComponent } from './ask.component';
import { AskService } from './ask.service';

@NgModule({
  declarations: [AskComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NoopAnimationsModule,
  ],
  exports: [AskComponent],
  entryComponents: [AskComponent],
  providers: [AskService],
})
export class AskTestingModule {}
