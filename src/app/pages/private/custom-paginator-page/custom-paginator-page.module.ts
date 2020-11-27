import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomPaginatorModule } from 'projects/customjs/paginator/src/public-api';
import { CustomPaginatorPageRoutingModule } from './custom-paginator-page-routing.module';
import { CustomPaginatorPageComponent } from './custom-paginator-page.component';

@NgModule({
  declarations: [CustomPaginatorPageComponent],
  imports: [
    CommonModule,
    CustomPaginatorPageRoutingModule,
    DemoContainerModule,
    CustomPaginatorModule,
  ],
})
export class CustomPaginatorPageModule {}
