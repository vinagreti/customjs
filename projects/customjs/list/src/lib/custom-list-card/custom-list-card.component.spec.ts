import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListCardComponent } from './custom-list-card.component';

describe('CustomListCardComponent', () => {
  let component: CustomListCardComponent;
  let fixture: ComponentFixture<CustomListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
