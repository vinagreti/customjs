import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { CustomCepInputMaskModule } from 'projects/customjs/mask/src/lib/custom-cep-input-mask';
import { CustomCepMaskModule } from 'projects/customjs/mask/src/lib/custom-cep-mask';
import { CustomCpfInputMaskModule } from 'projects/customjs/mask/src/lib/custom-cpf-input-mask';
import { CustomCpfMaskModule } from 'projects/customjs/mask/src/lib/custom-cpf-mask';
import { CustomTypeableCodeInputMaskModule } from 'projects/customjs/mask/src/public-api';
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
    MatInputModule,
    FormsModule,
  ],
})
export class CustomMasksPageModule {}
