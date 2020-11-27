import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-paginator-page',
  templateUrl: './custom-paginator-page.component.html',
  styleUrls: ['./custom-paginator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginatorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
