import { CustomMaskPhoneDirective } from './custom-mask-phone.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `<input customMaskPhone>`
})
class CustomMaskPhoneDirectiveTestComponent { }

describe('CustomMaskPhoneDirective', () => {
  let component: CustomMaskPhoneDirectiveTestComponent;
  let fixture: ComponentFixture<CustomMaskPhoneDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomMaskPhoneDirective,
        CustomMaskPhoneDirectiveTestComponent,
      ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaskPhoneDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
