import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '../alert.module';

@NgModule({
  imports: [CommonModule, AlertModule, NoopAnimationsModule],
})
export class AlertTestingModule {}
