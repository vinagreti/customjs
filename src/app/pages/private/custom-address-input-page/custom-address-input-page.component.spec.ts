import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddressInputPageComponent } from './custom-address-input-page.component';

describe('CustomAddressInputPageComponent', () => {
  let component: CustomAddressInputPageComponent;
  let fixture: ComponentFixture<CustomAddressInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAddressInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddressInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
