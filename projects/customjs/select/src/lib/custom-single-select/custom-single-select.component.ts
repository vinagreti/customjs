import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgModel,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { CustomSelectOptionComponent } from './../custom-select-option/custom-select-option.component';
import { CustomOptionLabelFunction } from './../custom-select.helpers';

@Component({
  selector: 'custom-single-select',
  templateUrl: './custom-single-select.component.html',
  styleUrls: ['./custom-single-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSingleSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSingleSelectComponent
  implements ControlValueAccessor, AfterViewInit {
  searchTerm = '';

  filteredOptions: Observable<any[]>;

  @Input() labelFn = CustomOptionLabelFunction;

  @Input() optionTemplate: TemplateRef<CustomSelectOptionComponent>;

  @Input()
  get options() {
    return this.innerOptions;
  }
  set options(v: any) {
    if (v !== this.innerOptions) {
      this.innerOptions = v;
      this.searchInputElement.control.setValue(this.searchTerm);
    }
  }

  @Input()
  get value() {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  @Input() disabled: boolean;

  @Input() required: boolean;

  @Input() name = '';

  @Input() placeholder = '';

  @Input() multi: boolean;

  @Input() notFoundMessage: string;

  @Input() repeat: boolean;

  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(NgModel, { static: true }) searchInputElement: NgModel;

  private innerOptions = [];

  private innerValue: any;

  private onTouchedCallback: () => void = () => {};

  private onChangeCallback: (_: any) => void = () => {};

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.watchSearchInput();
    }, 0);
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  writeValue(v: any) {
    if (`${v}` !== `${this.value}`) {
      this.value = v;
    }
  }

  onOptionSelected($event) {
    const selectedOption = $event.option.value;
    this.value = selectedOption;
  }

  private watchSearchInput() {
    this.filteredOptions = this.searchInputElement.valueChanges.pipe(
      startWith(''),
      filter(searchOption => typeof searchOption === 'string'),
      map(searchString =>
        searchString
          ? this.filterOptions(searchString)
          : [...(this.options || [])]
      )
    );
  }

  private filterOptions(value: string = ''): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any = {}) => {
      const filterSearch: string = JSON.stringify(option).toLowerCase();
      return filterSearch.includes(filterValue);
    });
  }
}
