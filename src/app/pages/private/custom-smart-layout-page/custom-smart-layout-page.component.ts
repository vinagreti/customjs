import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-smart-layout-page',
  templateUrl: './custom-smart-layout-page.component.html',
  styleUrls: ['./custom-smart-layout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSmartLayoutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  optionSelected(data: any) {
    console.log('CHEGOU', data);
  }
}
