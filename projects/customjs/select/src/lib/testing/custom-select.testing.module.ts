import { NgModule } from '@angular/core';
import { CustomSingleSelectTestingModule } from '../custom-single-select/testing/custom-single-select.testing.module';
import { CustomSelectModule } from './../custom-select.module';

@NgModule({
  imports: [CustomSelectModule, CustomSingleSelectTestingModule],
})
export class CustomSelectTestingModule {}
