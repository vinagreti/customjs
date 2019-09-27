import { CustomMaskDateDirective } from './custom-mask-date.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `<input customMaskDate>`
})
class CustomMaskDateDirectiveTestComponent { }

describe('CustomMaskDateDirective', () => {
  let component: CustomMaskDateDirectiveTestComponent;
  let fixture: ComponentFixture<CustomMaskDateDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomMaskDateDirective,
        CustomMaskDateDirectiveTestComponent,
      ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaskDateDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
