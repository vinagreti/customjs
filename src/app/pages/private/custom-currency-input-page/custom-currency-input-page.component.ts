import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-currency-input-page',
  templateUrl: './custom-currency-input-page.component.html',
  styleUrls: ['./custom-currency-input-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCurrencyInputPageComponent implements OnInit {
  modelValue = 123.45;

  constructor() {}

  ngOnInit() {}
}
