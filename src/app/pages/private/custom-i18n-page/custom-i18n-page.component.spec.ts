import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomI18nPageComponent } from './custom-i18n-page.component';

describe('CustomI18nPageComponent', () => {
  let component: CustomI18nPageComponent;
  let fixture: ComponentFixture<CustomI18nPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomI18nPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomI18nPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
