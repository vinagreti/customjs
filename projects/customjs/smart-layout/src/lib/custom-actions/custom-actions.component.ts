import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'custom-actions',
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomActionsComponent {
  @Input() title: string;

  @Input() description: string;

  @Input()
  @ContentChild(TemplateRef, { static: true })
  template: TemplateRef<any>;
}
