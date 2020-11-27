import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVersionPageComponent } from './custom-version-page.component';

describe('CustomVersionPageComponent', () => {
  let component: CustomVersionPageComponent;
  let fixture: ComponentFixture<CustomVersionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomVersionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVersionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
