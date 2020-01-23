import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListPageComponent } from './custom-list-page.component';

describe('CustomListPageComponent', () => {
  let component: CustomListPageComponent;
  let fixture: ComponentFixture<CustomListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
