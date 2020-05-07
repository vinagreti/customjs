import { CurrencyPipe, getCurrencySymbol } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'custom-currency-input',
  templateUrl: './customjs-currency-input.component.html',
  styleUrls: ['./customjs-currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CurrencyPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomjsCurrencyInputComponent),
      multi: true,
    },
  ],
})
export class CustomjsCurrencyInputComponent implements ControlValueAccessor {
  inputValue;

  @ViewChild('inputField', { static: true }) inputField: NgModel;

  @Input() disabled: boolean;

  @Input() required: boolean;

  @Input() placeholder: string;

  @Input() min: number;

  @Input() max: number;

  @Input() currency: string;

  @ContentChild(MatError, { static: false }) matError: MatError;

  getCurrencySymbol = getCurrencySymbol;

  /*
   ** ngModel propertie
   ** Used to two way data bind using [(ngModel)]
   */
  //  The internal data model
  private innerValue: number;
  //  Placeholders for the callbacks which are later provided by the Control Value Accessor
  private onTouchedCallback: () => void = () => {};
  //  Placeholders for the callbacks which are later provided by the Control Value Accessor
  private onChangeCallback: (_: any) => void = () => {};

  constructor(private currencyPipe: CurrencyPipe) {}

  @Input()
  set value(v: number) {
    this.innerValue = v || 0;
    this.inputValue = this.innerValue.toFixed(2);
    this.onInputValueChanged();
  }

  get value() {
    return this.innerValue;
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  // From ControlValueAccessor interface
  setDisabledState(disabled) {
    this.disabled = !!disabled;
  }

  writeValue(value: number) {
    value = value || 0;
    this.value = value;
  }

  onInputValueChanged() {
    this.innerValue = this.inputAsFloat;
    this.onChangeCallback(this.inputAsFloat);
  }

  private get inputAsFloat() {
    this.inputValue = this.maskedValue;
    const masked = this.floatStringFromInputValue();
    return parseFloat(masked);
  }

  private get maskedValue() {
    const stringValue = this.floatStringFromInputValue();
    return this.currencyPipe.transform(stringValue, ' ', 'symbol');
  }

  private floatStringFromInputValue() {
    if (this.inputValue) {
      const numberValue = this.inputValue.match(/[0-9]/g);
      const last = numberValue.pop();
      const secondLast = numberValue.pop() || 0;
      const decimalPart = numberValue.join('') || 0;
      return `${decimalPart}.${secondLast}${last}`;
    } else {
      return '0';
    }
  }
}
