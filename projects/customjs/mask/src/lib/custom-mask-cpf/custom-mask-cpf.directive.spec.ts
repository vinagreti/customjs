import { CustomMaskCpfDirective } from './custom-mask-cpf.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `
    <input customMaskCpf />
  `,
})
class CustomMaskCpfDirectiveTestComponent {}

describe('CustomMaskCpfDirective', () => {
  let component: CustomMaskCpfDirectiveTestComponent;
  let fixture: ComponentFixture<CustomMaskCpfDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMaskCpfDirective, CustomMaskCpfDirectiveTestComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaskCpfDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
