import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[customMaskPhone]',
})
export class CustomMaskPhoneDirective implements OnInit, OnDestroy {
  private valuechange$ = new BehaviorSubject<string>(undefined);

  private valueChangeSubscription: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private ngModel: NgModel,
  ) {}

  @HostListener('input', ['$event.target.value'])
  inputChanged(value: string) {
    this.valuechange$.next(value);
  }

  ngOnInit() {
    this.subscribeToValueChange();
    this.configureInput();
    this.configureNgModel();
  }

  ngOnDestroy() {
    this.unsubscribefromValueChange();
  }

  private configureInput() {
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', 'd{11}');
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', '11');
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', '11');
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'tel');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern(/\d{11}/),
      ]);
    }
  }

  private maskInputText(unmaskedValue) {
    unmaskedValue = typeof unmaskedValue === 'string' ? unmaskedValue : '';
    const maskedValue = this.maskedvalue(unmaskedValue);
    if (unmaskedValue !== maskedValue) {
      this.el.nativeElement.value = maskedValue;
    }
  }

  private maskedvalue(unmaskedValue) {
    const isNumeric = unmaskedValue && !isNaN(unmaskedValue);
    if (isNumeric) {
      return parseInt(unmaskedValue, 10);
    } else {
      return '';
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
}
