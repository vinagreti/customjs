import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectOptionComponent implements OnInit {
  @ContentChild(TemplateRef, { static: true }) optionTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
