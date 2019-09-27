import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { CustomMaskDateModule } from '@customjs/mask';
import { MasksPageRoutingModule } from './masks-page-routing.module';
import { MasksPageComponent } from './masks-page.component';

@NgModule({
  declarations: [MasksPageComponent],
  imports: [
    CommonModule,
    MasksPageRoutingModule,
    MatInputModule,
    FormsModule,
    CustomMaskDateModule,
  ],
})
export class MasksPageModule {}
