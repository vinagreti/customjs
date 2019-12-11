import { CustomMaskEmailDirective } from './custom-mask-email.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `
    <input customMaskEmail />
  `,
})
class CustomMaskEmailDirectiveTestComponent {}

describe('CustomMaskEmailDirective', () => {
  let component: CustomMaskEmailDirectiveTestComponent;
  let fixture: ComponentFixture<CustomMaskEmailDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMaskEmailDirective, CustomMaskEmailDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaskEmailDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
