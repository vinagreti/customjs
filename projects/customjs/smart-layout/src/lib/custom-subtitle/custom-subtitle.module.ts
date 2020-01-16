import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomSubtitleComponent } from './custom-subtitle.component';

@NgModule({
  declarations: [CustomSubtitleComponent],
  imports: [CommonModule],
  exports: [CustomSubtitleComponent],
})
export class CustomSubtitleModule {}
