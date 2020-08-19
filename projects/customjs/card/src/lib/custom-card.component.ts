import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CustomTitleComponent } from '@customjs/smart-layout';
import { CustomCardBadgeComponent } from './custom-card-badge/custom-card-badge.component';

@Component({
  selector: 'custom-card, [custom-card]',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  @ContentChild(CustomCardBadgeComponent, { static: false }) badge: CustomCardBadgeComponent;

  @Input() hiddenBorder = false;

  @Input() active: boolean;

  @Input() color: ThemePalette = 'primary';

  @ContentChild(CustomTitleComponent, { static: false }) title: CustomTitleComponent;
}
