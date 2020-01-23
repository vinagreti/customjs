import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { CustomJsMarkdownModule } from './../markdown/markdown.module';
import { DemoContainerComponent } from './demo-container.component';

@NgModule({
  imports: [CommonModule, CustomJsMarkdownModule, MatTabsModule],
  declarations: [DemoContainerComponent],
  exports: [DemoContainerComponent],
})
export class DemoContainerModule {}
