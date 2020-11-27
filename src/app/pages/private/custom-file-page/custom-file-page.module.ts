import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { CustomjsFileModule } from 'projects/customjs/file/src/public-api';
import { CustomFilePageRoutingModule } from './custom-file-page-routing.module';
import { CustomFilePageComponent } from './custom-file-page.component';

@NgModule({
  declarations: [CustomFilePageComponent],
  imports: [CommonModule, CustomFilePageRoutingModule, DemoContainerModule, CustomjsFileModule],
})
export class CustomFilePageModule {}
