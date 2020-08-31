import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WsModule } from '@customjs/ws';
import { CustomWsPageRoutingModule } from './custom-ws-page-routing.module';
import { CustomWsPageComponent } from './custom-ws-page.component';

@NgModule({
  declarations: [CustomWsPageComponent],
  imports: [CommonModule, CustomWsPageRoutingModule, WsModule],
})
export class CustomWsPageModule {}
