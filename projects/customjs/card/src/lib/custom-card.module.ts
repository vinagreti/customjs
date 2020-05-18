import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTitleComponent, CustomTitleModule } from '@customjs/smart-layout';
import { CustomCardBadgeComponent } from './custom-card-badge/custom-card-badge.component';
import { CustomCardComponent } from './custom-card.component';

@NgModule({
  declarations: [CustomCardComponent, CustomCardBadgeComponent],
  imports: [CommonModule, CustomTitleModule],
  exports: [CustomCardComponent, CustomCardBadgeComponent, CustomTitleComponent],
})
export class CustomCardModule {}
