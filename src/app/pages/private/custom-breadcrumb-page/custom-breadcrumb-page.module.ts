import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { BreadcrumbModule } from 'projects/customjs/breadcrumb/src/public-api';
import { CustomBreadcrumbPageRoutingModule } from './custom-breadcrumb-page-routing.module';
import { CustomBreadcrumbPageComponent } from './custom-breadcrumb-page.component';

@NgModule({
  declarations: [CustomBreadcrumbPageComponent],
  imports: [CommonModule, CustomBreadcrumbPageRoutingModule, DemoContainerModule, BreadcrumbModule],
})
export class CustomBreadcrumbPageModule {}
