import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CustomBackButtonComponent } from './custom-back-button.component';

@NgModule({
  declarations: [CustomBackButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  exports: [CustomBackButtonComponent],
})
export class CustomBackButtonModule {}
