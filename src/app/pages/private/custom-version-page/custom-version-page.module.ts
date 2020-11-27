import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContainerModule } from '@components/layout';
import { VersionModule } from 'projects/customjs/version/src/public-api';
import { CustomVersionPageRoutingModule } from './custom-version-page-routing.module';
import { CustomVersionPageComponent } from './custom-version-page.component';

@NgModule({
  declarations: [CustomVersionPageComponent],
  imports: [CommonModule, CustomVersionPageRoutingModule, DemoContainerModule, VersionModule],
})
export class CustomVersionPageModule {}
