import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'custom-list-card',
  templateUrl: './custom-list-card.component.html',
  styleUrls: ['./custom-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListCardComponent implements OnInit {
  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
