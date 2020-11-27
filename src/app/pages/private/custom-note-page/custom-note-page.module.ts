import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomjsNoteModule } from 'projects/customjs/note/src/public-api';
import { CustomNotePageRoutingModule } from './custom-note-page-routing.module';
import { CustomNotePageComponent } from './custom-note-page.component';

@NgModule({
  declarations: [CustomNotePageComponent],
  imports: [CommonModule, CustomNotePageRoutingModule, DemoContainerModule, CustomjsNoteModule],
})
export class CustomNotePageModule {}
