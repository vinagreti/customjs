import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTablePageComponent } from './custom-table-page.component';

describe('CustomTablePageComponent', () => {
  let component: CustomTablePageComponent;
  let fixture: ComponentFixture<CustomTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
