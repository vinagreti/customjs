import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-address-input-page',
  templateUrl: './custom-address-input-page.component.html',
  styleUrls: ['./custom-address-input-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomAddressInputPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
