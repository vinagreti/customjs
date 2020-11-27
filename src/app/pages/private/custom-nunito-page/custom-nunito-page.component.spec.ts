import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNunitoPageComponent } from './custom-nunito-page.component';

describe('CustomNunitoPageComponent', () => {
  let component: CustomNunitoPageComponent;
  let fixture: ComponentFixture<CustomNunitoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNunitoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNunitoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
