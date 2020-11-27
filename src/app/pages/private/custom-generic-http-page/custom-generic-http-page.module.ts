import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DemoContainerModule } from '@components/layout';
import { GenericHttpModule } from 'projects/customjs/generic-http/src/public-api';
import { CustomGenericHttpPageRoutingModule } from './custom-generic-http-page-routing.module';
import { CustomGenericHttpPageComponent } from './custom-generic-http-page.component';

@NgModule({
  declarations: [CustomGenericHttpPageComponent],
  imports: [
    CommonModule,
    CustomGenericHttpPageRoutingModule,
    DemoContainerModule,
    GenericHttpModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
})
export class CustomGenericHttpPageModule {}
