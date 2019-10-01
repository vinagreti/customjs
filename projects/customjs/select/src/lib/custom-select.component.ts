import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomSelectOptionComponent } from './custom-select-option/custom-select-option.component';
import { CustomOptionLabelFunction } from './custom-select.helpers';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit {
  optionTemplate: TemplateRef<any>;

  @ContentChild(CustomSelectOptionComponent, { static: true })
  customSelectOption: CustomSelectOptionComponent;

  @Input()
  get value() {
    return this.innerValue && this.valueAttr
      ? this.innerValue[this.valueAttr]
      : this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      const initialObj = (this.options || []).find(
        option => (this.valueAttr ? option[this.valueAttr] : option) === v
      );

      const initialValue = initialObj || v;

      this.innerValue = initialValue;

      this.onChangeCallback(this.value);

      this.optionSelected.emit();
    }
  }

  @Input() valueAttr: string;

  @Input() options: any[] = [];

  @Input() labelFn = CustomOptionLabelFunction;

  @Input() disabled: boolean;

  @Input() required: boolean;

  @Input() name = '';

  @Input() placeholder = '';

  @Input() multi: boolean;

  @Input() notFoundMessage: string;

  @Input() repeat: boolean;

  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  @Output() optionSelected: EventEmitter<any> = new EventEmitter<any>();

  private innerValue: any;

  private onTouchedCallback: () => void = () => {};

  private onChangeCallback: (_: any) => void = () => {};

  constructor() {}

  ngOnInit() {
    if (this.customSelectOption) {
      this.optionTemplate = this.customSelectOption.optionTemplate;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  writeValue(v: any) {
    if (`${v}` !== `${this.value}`) {
      if (this.valueAttr) {
        this.value = v;
      } else {
        this.value = v;
      }
    }
  }
}
