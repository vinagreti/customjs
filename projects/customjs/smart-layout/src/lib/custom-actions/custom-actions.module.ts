import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CustomActionsOptionComponent } from './custom-actions-option/custom-actions-option.component';
import { CustomActionsComponent } from './custom-actions.component';

@NgModule({
  declarations: [CustomActionsComponent, CustomActionsOptionComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [CustomActionsComponent, CustomActionsOptionComponent],
})
export class CustomActionsModule {}
