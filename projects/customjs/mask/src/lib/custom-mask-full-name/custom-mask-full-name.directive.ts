import { Directive, OnInit, ElementRef, Renderer2, Optional } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';

@Directive({
  selector: '[customMaskFullName]'
})
export class CustomMaskFullNameDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private ngModel: NgModel,
  ) { }

  ngOnInit() {
    this.configureInput();
    this.configureNgModel();
  }

  private configureInput() {
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', '[a-zA-Z] [a-zA-Z]');
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', '192');
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', '3');
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([
        Validators.maxLength(192),
        Validators.minLength(3),
        Validators.pattern(/[a-zA-Z] [a-zA-Z]/),
      ]);
    }
  }

}
