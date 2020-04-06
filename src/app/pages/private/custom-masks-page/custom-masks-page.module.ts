import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCpfInputMaskModule } from 'projects/customjs/mask/src/lib/custom-cpf-input-mask';
import { CustomCpfMaskModule } from 'projects/customjs/mask/src/lib/custom-cpf-mask';
import { CustomMasksPageRoutingModule } from './custom-masks-page-routing.module';
import { CustomMasksPageComponent } from './custom-masks-page.component';

@NgModule({
  declarations: [CustomMasksPageComponent],
  imports: [
    CommonModule,
    CustomMasksPageRoutingModule,
    CustomCpfInputMaskModule,
    CustomCpfMaskModule,
    FormsModule,
  ],
})
export class CustomMasksPageModule {}
