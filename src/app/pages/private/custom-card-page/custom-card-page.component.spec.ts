import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardPageComponent } from './custom-card-page.component';

describe('CustomCardPageComponent', () => {
  let component: CustomCardPageComponent;
  let fixture: ComponentFixture<CustomCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
