import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  CustomCepInputMaskModule,
  CustomCepMaskModule,
  CustomCpfInputMaskModule,
  CustomCpfMaskModule,
  CustomMaskEmailModule,
  CustomTypeableCodeInputMaskModule,
} from 'projects/customjs/mask/src/public-api';
import { CustomMasksPageRoutingModule } from './custom-masks-page-routing.module';
import { CustomMasksPageComponent } from './custom-masks-page.component';

@NgModule({
  declarations: [CustomMasksPageComponent],
  imports: [
    CommonModule,
    CustomMasksPageRoutingModule,
    CustomCpfInputMaskModule,
    CustomCepInputMaskModule,
    CustomCpfMaskModule,
    CustomCepMaskModule,
    CustomTypeableCodeInputMaskModule,
    CustomMaskEmailModule,
    MatInputModule,
    FormsModule,
  ],
})
export class CustomMasksPageModule {}
