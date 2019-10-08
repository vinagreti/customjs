import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { CustomAddressInputModule } from '../custom-address-input.module';

@NgModule({
  imports: [CustomAddressInputModule, HttpClientTestingModule],
})
export class CustomAddressInputTestingModule {}
