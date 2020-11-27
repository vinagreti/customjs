import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBreadcrumbPageComponent } from './custom-breadcrumb-page.component';

describe('CustomBreadcrumbPageComponent', () => {
  let component: CustomBreadcrumbPageComponent;
  let fixture: ComponentFixture<CustomBreadcrumbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBreadcrumbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBreadcrumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
