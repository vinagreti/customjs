import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomTypeableCodeInputMaskDirective } from './custom-typeable-code-input-mask.directive';

@Component({
  template: `
    <input customTypeableCodeInputMask />
  `,
})
class CustomTypeableCodeInputMaskDirectiveTestComponent {}

describe('CustomTypeableCodeInputMaskDirective', () => {
  let component: CustomTypeableCodeInputMaskDirectiveTestComponent;
  let fixture: ComponentFixture<CustomTypeableCodeInputMaskDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomTypeableCodeInputMaskDirective,
        CustomTypeableCodeInputMaskDirectiveTestComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTypeableCodeInputMaskDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
