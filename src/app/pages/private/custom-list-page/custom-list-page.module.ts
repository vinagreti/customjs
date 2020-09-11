import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DemoContainerModule } from '@components/layout';
import { CustomCardModule } from 'projects/customjs/card/src/public-api';
import { CustomListModule } from 'projects/customjs/list/src/public-api';
import { CustomListPageRoutingModule } from './custom-list-page-routing.module';
import { CustomListPageComponent } from './custom-list-page.component';

@NgModule({
  declarations: [CustomListPageComponent],
  imports: [
    CommonModule,
    CustomListPageRoutingModule,
    DemoContainerModule,
    CustomListModule,
    CustomCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class CustomListPageModule {}
