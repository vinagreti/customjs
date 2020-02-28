import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CustomAddressInputComponent } from './custom-address-input.component';
import { CustomAddressInputService } from './custom-address-input.service';

@NgModule({
  declarations: [CustomAddressInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [CustomAddressInputComponent],
  providers: [CustomAddressInputService],
})
export class CustomAddressInputModule {}
