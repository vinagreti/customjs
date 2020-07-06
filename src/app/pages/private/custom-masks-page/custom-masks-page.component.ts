import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-masks-page',
  templateUrl: './custom-masks-page.component.html',
  styleUrls: ['./custom-masks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMasksPageComponent {
  cpf: number;

  cep: number;

  invoice: number;

  constructor() {}
}
