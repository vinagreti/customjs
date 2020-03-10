import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card.component';
import { CustomCardBadgeComponent } from './custom-card-badge/custom-card-badge.component';

@NgModule({
  declarations: [CustomCardComponent, CustomCardBadgeComponent],
  imports: [CommonModule],
  exports: [CustomCardComponent, CustomCardBadgeComponent],
})
export class CustomCardModule {}
