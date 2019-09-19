import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { AlertService } from './alert.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [AlertService],
})
export class AlertModule {}
