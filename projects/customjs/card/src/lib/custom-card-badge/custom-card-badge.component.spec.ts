import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardBadgeComponent } from './custom-card-badge.component';

describe('CustomCardBadgeComponent', () => {
  let component: CustomCardBadgeComponent;
  let fixture: ComponentFixture<CustomCardBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
