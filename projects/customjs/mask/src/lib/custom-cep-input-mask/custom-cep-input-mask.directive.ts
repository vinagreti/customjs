import { Directive, ElementRef, Optional, Renderer2 } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { CustomInputMaskDirective } from '../custom-input-mask';

const minLength = 8;
const maxLength = 8;
const maskPattern = `[0-9]{${minLength},${maxLength}}`;

@Directive({
  selector: '[customCepInputMask]',
})
export class CustomCepInputMaskDirective extends CustomInputMaskDirective {
  protected ngModelValidators = [
    Validators.maxLength(maxLength),
    Validators.minLength(minLength),
    Validators.pattern(maskPattern),
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
