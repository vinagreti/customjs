import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
