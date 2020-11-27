import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoContainerModule } from '@components/layout';
import { AskModule } from '@customjs/ask';
import { CustomAskPageRoutingModule } from './custom-ask-page-routing.module';
import { CustomAskPageComponent } from './custom-ask-page.component';

@NgModule({
  declarations: [CustomAskPageComponent],
  imports: [
    CommonModule,
    CustomAskPageRoutingModule,
    AskModule,
    DemoContainerModule,
    MatButtonModule,
  ],
})
export class CustomAskPageModule {}
