import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTitleComponent } from './custom-title.component';

@NgModule({
  declarations: [CustomTitleComponent],
  imports: [CommonModule],
  exports: [CustomTitleComponent],
})
export class CustomTitleModule {}
