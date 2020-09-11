import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomActionsModule, CustomTitleModule } from '@customjs/smart-layout';
import { CustomCardBadgeComponent } from './custom-card-badge/custom-card-badge.component';
import { CustomCardComponent } from './custom-card.component';

@NgModule({
  declarations: [CustomCardComponent, CustomCardBadgeComponent],
  imports: [
    CommonModule,
    CustomTitleModule,
    MatCheckboxModule,
    FlexLayoutModule,
    CustomActionsModule,
  ],
  exports: [CustomCardComponent, CustomCardBadgeComponent, CustomTitleModule, CustomActionsModule],
})
export class CustomCardModule {}
