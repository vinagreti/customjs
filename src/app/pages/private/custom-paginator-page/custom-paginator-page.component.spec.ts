import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPaginatorPageComponent } from './custom-paginator-page.component';

describe('CustomPaginatorPageComponent', () => {
  let component: CustomPaginatorPageComponent;
  let fixture: ComponentFixture<CustomPaginatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPaginatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
