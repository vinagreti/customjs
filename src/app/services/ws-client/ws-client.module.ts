import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomWsClientService } from './ws-client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CustomWsClientService
  ]
})
export class CustomWsClientModule { }
