import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomjsNoteComponent } from './custom-note.component';

@NgModule({
  declarations: [CustomjsNoteComponent],
  imports: [CommonModule],
  exports: [CustomjsNoteComponent],
})
export class CustomjsNoteModule {}
