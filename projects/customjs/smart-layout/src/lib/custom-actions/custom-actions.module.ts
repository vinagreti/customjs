import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomActionsComponent } from './custom-actions.component';

@NgModule({
  declarations: [CustomActionsComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomActionsComponent]
})
export class CustomActionsModule { }
