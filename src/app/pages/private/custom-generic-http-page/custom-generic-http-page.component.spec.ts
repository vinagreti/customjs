import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGenericHttpPageComponent } from './custom-generic-http-page.component';

describe('CustomGenericHttpPageComponent', () => {
  let component: CustomGenericHttpPageComponent;
  let fixture: ComponentFixture<CustomGenericHttpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGenericHttpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGenericHttpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
