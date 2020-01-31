import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  @Input() border = true;
}
