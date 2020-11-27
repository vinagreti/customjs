import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCurrencyInputPageComponent } from './custom-currency-input-page.component';

describe('CustomCurrencyInputPageComponent', () => {
  let component: CustomCurrencyInputPageComponent;
  let fixture: ComponentFixture<CustomCurrencyInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCurrencyInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCurrencyInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
