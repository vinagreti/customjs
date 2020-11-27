import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-card-page',
  templateUrl: './custom-card-page.component.html',
  styleUrls: ['./custom-card-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
