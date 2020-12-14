import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomRgInputMaskDirective } from './custom-rg-input-mask.directive';

@Component({
  template: `
    <input customRgInputMask />
  `,
})
class CustomRgInputMaskDirectiveTestComponent { }

describe('CustomRgInputMaskDirective', () => {
  let component: CustomRgInputMaskDirectiveTestComponent;
  let fixture: ComponentFixture<CustomRgInputMaskDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRgInputMaskDirective, CustomRgInputMaskDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRgInputMaskDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
