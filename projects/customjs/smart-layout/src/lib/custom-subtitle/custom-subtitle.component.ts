import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-subtitle',
  templateUrl: './custom-subtitle.component.html',
  styleUrls: ['./custom-subtitle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSubtitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
