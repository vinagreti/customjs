import { CustomMaskFullNameDirective } from './custom-mask-full-name.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `
    <input customMaskFullName />
  `,
})
class CustomMaskFullNameDirectiveTestComponent {}

describe('CustomMaskFullNameDirective', () => {
  let component: CustomMaskFullNameDirectiveTestComponent;
  let fixture: ComponentFixture<CustomMaskFullNameDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMaskFullNameDirective, CustomMaskFullNameDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaskFullNameDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
