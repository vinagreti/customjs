import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masks-page',
  templateUrl: './masks-page.component.html',
  styleUrls: ['./masks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasksPageComponent implements OnInit {
  componentData: any = {};

  constructor() {}

  ngOnInit() {}
}
