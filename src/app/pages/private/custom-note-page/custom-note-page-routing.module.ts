import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomNotePageComponent } from './custom-note-page.component';

const routes: Routes = [{ path: '', component: CustomNotePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomNotePageRoutingModule {}
