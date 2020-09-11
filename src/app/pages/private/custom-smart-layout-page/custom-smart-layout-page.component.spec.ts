import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSmartLayoutPageComponent } from './custom-smart-layout-page.component';

describe('CustomSmartLayoutPageComponent', () => {
  let component: CustomSmartLayoutPageComponent;
  let fixture: ComponentFixture<CustomSmartLayoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSmartLayoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSmartLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
