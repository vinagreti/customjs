import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomInputMaskDirective } from './custom-input-mask.directive';

@Component({
  template: `
    <input customInputMask />
  `,
})
class CustomInputMaskDirectiveTestComponent {}

describe('CustomInputMaskDirective', () => {
  let component: CustomInputMaskDirectiveTestComponent;
  let fixture: ComponentFixture<CustomInputMaskDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInputMaskDirective, CustomInputMaskDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputMaskDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
