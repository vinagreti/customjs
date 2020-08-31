import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomSelectModule } from 'projects/customjs/select/src/public-api';
import { CustomSelectPageRoutingModule } from './custom-select-page-routing.module';
import { CustomSelectPageComponent } from './custom-select-page.component';

@NgModule({
  declarations: [CustomSelectPageComponent],
  imports: [CommonModule, CustomSelectPageRoutingModule, CustomSelectModule, FormsModule],
})
export class CustomSelectPageModule {}
