import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomCepInputMaskDirective } from './custom-cep-input-mask.directive';

@Component({
  template: `
    <input customCepInputMask />
  `,
})
class CustomCepInputMaskDirectiveTestComponent {}

describe('CustomCepInputMaskDirective', () => {
  let component: CustomCepInputMaskDirectiveTestComponent;
  let fixture: ComponentFixture<CustomCepInputMaskDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCepInputMaskDirective, CustomCepInputMaskDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCepInputMaskDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
