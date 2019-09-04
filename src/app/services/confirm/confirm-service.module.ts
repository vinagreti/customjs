import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ConfirmServiceComponent } from './confirm-service.component';
import { ConfirmService } from './confirm.service';

@NgModule({
  declarations: [ConfirmServiceComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ConfirmServiceComponent],
  entryComponents: [ConfirmServiceComponent],
  providers: [ConfirmService]
})
export class ConfirmServiceModule { }
