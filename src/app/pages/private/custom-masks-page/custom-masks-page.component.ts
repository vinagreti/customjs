import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-masks-page',
  templateUrl: './custom-masks-page.component.html',
  styleUrls: ['./custom-masks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMasksPageComponent implements OnInit {
  cpf: number;

  constructor() {}

  ngOnInit() {}
}
