import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CustomJsMarkdownComponent } from './markdown.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, MarkdownModule.forRoot({ loader: HttpClient })],
  declarations: [CustomJsMarkdownComponent],
  exports: [CustomJsMarkdownComponent, MarkdownModule],
})
export class CustomJsMarkdownModule {}
