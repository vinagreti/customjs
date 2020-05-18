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

const cepLength = 8;
const cepPattern = `d{${cepLength}}`;

@Directive({
  selector: '[customCepInputMask]',
})
export class CustomCepInputMaskDirective implements OnInit, OnDestroy {
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

  @HostListener('paste', ['$event'])
  inputPaste(event: ClipboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    const pastedData = (event.clipboardData || (window as any).clipboardData).getData('text');
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

  private configureInput() {
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', cepPattern);
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', `${cepLength}`);
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', `${cepLength}`);
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'tel');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([
        Validators.maxLength(cepLength),
        Validators.minLength(cepLength),
        Validators.pattern(/\d{8}/),
      ]);
    }
  }

  private maskInputText(unmaskedValue) {
    unmaskedValue = typeof unmaskedValue === 'string' ? unmaskedValue : '';
    const maskedValue = this.maskedvalue(unmaskedValue);
    if (unmaskedValue !== maskedValue) {
      this.setMaskedValue(maskedValue);
    }
  }

  private maskedvalue(unmaskedValue) {
    return unmaskedValue.replace(/\D/g, '');
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
}
