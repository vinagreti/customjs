import { Directive, ElementRef, Optional, Renderer2 } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { CustomInputMaskDirective } from '../custom-input-mask';
import { CustomValidators } from '../custom-validators/custom-validators';

const minLength = 11;
const maxLength = 11;
const maskPattern = `[0-9]{${minLength},${maxLength}}`;

@Directive({
  selector: '[customCpfInputMask]',
})
export class CustomCpfInputMaskDirective extends CustomInputMaskDirective {
  protected ngModelValidators = [
    Validators.maxLength(maxLength),
    Validators.minLength(minLength),
    Validators.pattern(maskPattern),
    CustomValidators.validateCpf(),
  ];

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
    @Optional() protected ngModel: NgModel,
  ) {
    super(el, renderer, ngModel);
  }

  protected configureInput() {
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', maskPattern);
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', `${maxLength}`);
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', `${minLength}`);
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'tel');
  }

  protected getMaskedValue(unmaskedValue) {
    return unmaskedValue.replace(/\D/g, '').slice(0, maxLength);
  }
}
