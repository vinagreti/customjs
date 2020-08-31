import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AskModule } from '@customjs/ask';
import { CustomAskPageRoutingModule } from './custom-ask-page-routing.module';
import { CustomAskPageComponent } from './custom-ask-page.component';

@NgModule({
  declarations: [CustomAskPageComponent],
  imports: [CommonModule, CustomAskPageRoutingModule, AskModule],
})
export class CustomAskPageModule {}
