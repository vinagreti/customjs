import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'custom-actions',
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
