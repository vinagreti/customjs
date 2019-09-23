import { NgModule } from '@angular/core';
import { CustomPaginatorModule } from '@customjs/paginator';
import { CustomListModule } from './../custom-list.module';

@NgModule({
  declarations: [],
  imports: [CustomListModule, CustomPaginatorModule],
})
export class CustomListTestingModule {}
