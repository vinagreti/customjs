import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { CustomPaginatorComponent } from './custom-paginator.component';

@NgModule({
  declarations: [CustomPaginatorComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  exports: [CustomPaginatorComponent],
})
export class CustomPaginatorModule {}
