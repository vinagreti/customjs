import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout/demo-container/demo-container.module';
import { CustomListModule } from 'projects/customjs/list/src/public-api';
import { CustomListPageRoutingModule } from './custom-list-page-routing.module';
import { CustomListPageComponent } from './custom-list-page.component';

@NgModule({
  declarations: [CustomListPageComponent],
  imports: [CommonModule, CustomListPageRoutingModule, DemoContainerModule, CustomListModule],
})
export class CustomListPageModule {}
