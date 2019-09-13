import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AskModule } from '@customjs/ask';
import { WsModule } from '@customjs/ws';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardPageRoutingModule, AskModule, WsModule],
})
export class DashboardPageModule {}
