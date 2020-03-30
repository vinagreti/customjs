import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomCpfInputMaskDirective } from './custom-cpf-input-mask.directive';

@Component({
  template: `
    <input customCpfInputMask />
  `,
})
class CustomCpfInputMaskDirectiveTestComponent {}

describe('CustomCpfInputMaskDirective', () => {
  let component: CustomCpfInputMaskDirectiveTestComponent;
  let fixture: ComponentFixture<CustomCpfInputMaskDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCpfInputMaskDirective, CustomCpfInputMaskDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCpfInputMaskDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
