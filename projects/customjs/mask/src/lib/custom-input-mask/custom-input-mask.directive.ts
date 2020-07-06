import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { NgModel, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[customInputMask]',
})
export class CustomInputMaskDirective implements OnInit, OnDestroy {
  protected ngModelValidators: ValidatorFn[] = [];

  protected valuechange$ = new BehaviorSubject<string>(undefined);

  private valueChangeSubscription: Subscription;

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
    @Optional() protected ngModel: NgModel,
  ) {}

  @HostListener('input', ['$event.target.value'])
  inputChanged(value: string) {
    this.valuechange$.next(value);
  }

  @HostListener('paste', ['$event'])
  inputPaste(event: ClipboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    const pastedData = this.getClipboardData(event);
    this.valuechange$.next(pastedData);
  }

  ngOnInit() {
    this.subscribeToValueChange();
    this.configureInput();
    this.configureNgModel();
  }

  ngOnDestroy() {
    this.unsubscribefromValueChange();
  }

  protected configureInput() {}

  protected configureNgModel() {
    if (this.ngModel) {
      const validators = this.ngModel.validator ? [this.ngModel.validator] : [];
      this.ngModel.control.setValidators([...validators, ...this.ngModelValidators]);
    }
  }

  protected getMaskedValue(unmaskedValue: any) {
    return unmaskedValue;
  }

  private maskInputText(unmaskedValue) {
    unmaskedValue = typeof unmaskedValue === 'string' ? unmaskedValue : '';
    const maskedValue = this.getMaskedValue(unmaskedValue);
    if (unmaskedValue !== maskedValue) {
      this.valuechange$.next(maskedValue);
    } else {
      this.setMaskedValue(maskedValue);
    }
  }

  private subscribeToValueChange() {
    this.valueChangeSubscription = this.valuechange$.pipe(debounceTime(100)).subscribe(value => {
      this.maskInputText(value);
    });
  }

  private unsubscribefromValueChange() {
    this.valueChangeSubscription.unsubscribe();
  }

  private setMaskedValue(maskedValue: string) {
    if (this.ngModel) {
      this.ngModel.control.setValue(maskedValue);
    }
  }

  private getClipboardData(event: ClipboardEvent) {
    return (event.clipboardData || (window as any).clipboardData).getData('text');
  }
}
