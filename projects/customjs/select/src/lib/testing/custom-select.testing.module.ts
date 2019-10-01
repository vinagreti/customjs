import { NgModule } from '@angular/core';
import { CustomSelectModule } from './../custom-select.module';
import { CustomSingleSelectTestingModule } from './../custom-single-select/testing';

@NgModule({
  imports: [
    CustomSelectModule,
    CustomSingleSelectTestingModule,
  ]
})
export class CustomSelectTestingModule { }
