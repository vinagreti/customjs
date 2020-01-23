import { Directive, ElementRef, OnInit, Optional, Renderer2 } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';

@Directive({
  selector: '[customMaskEmail]',
})
export class CustomMaskEmailDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private ngModel: NgModel,
  ) {}

  ngOnInit() {
    this.configureInput();
    this.configureNgModel();
  }

  private configureInput() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'pattern',
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$',
    );
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', '5');
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'email');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([Validators.minLength(5), Validators.email]);
    }
  }
}
