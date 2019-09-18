import { NgModule } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GenericHttp } from './../generic-http.service';
import { GenericHttpModule } from './../generic-http.module';

@NgModule({
  declarations: [],
  imports: [
    GenericHttpModule,
    HttpClientTestingModule,
  ],
  providers: [
    GenericHttp,
  ]
})
export class GenericHttpTestingModule { }
