import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AskComponent } from './ask.component';
import { AskService } from './ask.service';

@NgModule({
  declarations: [AskComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AskComponent],
  entryComponents: [AskComponent],
  providers: [AskService],
})
export class AskModule {}
