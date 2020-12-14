import { Directive, ElementRef, Optional, Renderer2 } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { CustomInputMaskDirective } from '../custom-input-mask';

const minLength = 4;
const maxLength = 4;
const maskPattern = `[0-9,A-Z,a-z,\.,\-]{${minLength},${maxLength}}`;

@Directive({
  selector: '[customRgInputMask]',
})
export class CustomRgInputMaskDirective extends CustomInputMaskDirective {
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
    return unmaskedValue.replace(/[^0-9,a-z,A-Z,\-,\.]/g, '').slice(0, maxLength);
  }
}
