import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { I18nService } from '@customjs/i18n';
import { BehaviorSubject } from 'rxjs';
import { CustomListTranslationKeysMap } from './../custom-list-internal.i18n';

@Component({
  selector: 'custom-list-filter',
  templateUrl: './custom-list-filter.component.html',
  styleUrls: ['./custom-list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomListFilterComponent {
  emptyFilter$ = new BehaviorSubject<boolean>(true);

  @Input() form: {} = {};

  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  @Output() filter = new EventEmitter<{ [key: string]: string }>();

  @Output() closefilter = new EventEmitter();

  constructor(public i18n: I18nService<CustomListTranslationKeysMap>) {}

  onFilter() {
    this.filter.emit(this.form);
    this.detectFilterStatus();
  }

  onCloseFilter() {
    this.closefilter.emit();
  }

  onClearFilter() {
    this.form = {};
    this.onFilter();
  }

  private detectFilterStatus() {
    const isEmpty = Object.keys(this.form).reduce((empty, key) => {
      const value = this.form[key];
      return empty && !value && value !== 0;
    }, true);
    this.emptyFilter$.next(isEmpty);
  }
}
