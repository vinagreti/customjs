import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomListCardComponent } from './custom-list-card.component';

@NgModule({
  declarations: [CustomListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomListCardComponent]
})
export class CustomListCardModule { }
