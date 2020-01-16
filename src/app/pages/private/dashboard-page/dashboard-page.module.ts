import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from '@customjs/alert';
import { AskModule } from '@customjs/ask';
import { WsModule } from '@customjs/ws';
import { CustomSelectModule } from './../../../../../projects/customjs/select/src/lib/custom-select.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    AskModule,
    WsModule,
    AlertModule,
    CustomSelectModule,
    FormsModule,
  ],
})
export class DashboardPageModule {}
