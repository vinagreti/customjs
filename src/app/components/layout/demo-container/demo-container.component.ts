import { Component, Input } from '@angular/core';

export const TABS = {
  overview: 0,
  examples: 1,
};

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent {
  baseHref;

  @Input() readmeSrc = '';

  @Input() activeTab;

  constructor() {}
}
