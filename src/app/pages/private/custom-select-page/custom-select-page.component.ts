import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-select-page',
  templateUrl: './custom-select-page.component.html',
  styleUrls: ['./custom-select-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectPageComponent {
  data = 'A';

  options = ['A', 'B'];

  constructor() {}
}
