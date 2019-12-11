import { NgModule } from '@angular/core';
import { CustomSingleSelectModule } from './../custom-single-select.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CustomSingleSelectModule, NoopAnimationsModule],
})
export class CustomSingleSelectTestingModule {}
