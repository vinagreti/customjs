import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-masks-page',
  templateUrl: './custom-masks-page.component.html',
  styleUrls: ['./custom-masks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMasksPageComponent {
  maskInitialData = {
    cpf: '04504504545',
    cep: '88000000',
    invoice: '321654987321654987321654987321654987321654987000',
    email: 'test@test.com',
  };

  constructor() {}
}
