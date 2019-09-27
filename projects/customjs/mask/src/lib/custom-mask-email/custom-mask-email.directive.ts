import { Directive, OnInit, ElementRef, Renderer2, Optional } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';

@Directive({
  selector: '[customMaskEmail]'
})
export class CustomMaskEmailDirective implements OnInit {

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
    this.renderer.setAttribute(this.el.nativeElement, 'pattern', '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    this.renderer.setAttribute(this.el.nativeElement, 'minlength', '5');
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'email');
  }

  private configureNgModel() {
    if (this.ngModel) {
      this.ngModel.control.setValidators([
        Validators.minLength(5),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ]);
    }
  }

}
