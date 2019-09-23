import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [RouterModule, FlexLayoutModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
