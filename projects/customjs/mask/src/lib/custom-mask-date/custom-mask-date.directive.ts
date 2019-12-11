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
  selector: '[customMaskDate]',
})
export class CustomMaskDateDirective implements OnInit, OnDestroy {
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
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', 'd{10}');
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', '10');
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', '10');
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'tel');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/),
      ]);
    }
  }

  private maskInputText(unmaskedValue) {
    unmaskedValue = typeof unmaskedValue === 'string' ? unmaskedValue : '';
    const maskedValue = this.maskedvalue(unmaskedValue);
    if (unmaskedValue !== maskedValue) {
      this.ngModel.control.patchValue(maskedValue);
    }
  }

  private maskedvalue(unmaskedValue) {
    return unmaskedValue
      .replace(/([^0-9])/g, '')
      .replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, ($1, $2, $3, $4) => {
        return $4 ? `${$2}/${$3}/${$4}` : $3 ? `${$2}/${$3}` : $2;
      });
  }

  private subscribeToValueChange() {
    this.valueChangeSubscription = this.valuechange$.pipe(debounceTime(200)).subscribe(value => {
      this.maskInputText(value);
    });
  }

  private unsubscribefromValueChange() {
    this.valueChangeSubscription.unsubscribe();
  }
}
