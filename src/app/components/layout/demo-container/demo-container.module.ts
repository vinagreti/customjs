import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomBackButtonModule } from '@components/custom-back-button';
import { CustomJsMarkdownModule } from './../markdown/markdown.module';
import { DemoContainerComponent } from './demo-container.component';

@NgModule({
  imports: [CommonModule, CustomJsMarkdownModule, MatTabsModule, CustomBackButtonModule],
  declarations: [DemoContainerComponent],
  exports: [DemoContainerComponent],
})
export class DemoContainerModule {}
