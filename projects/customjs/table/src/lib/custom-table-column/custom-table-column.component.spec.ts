import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableColumnComponent } from './custom-table-column.component';

describe('CustomTableColumnComponent', () => {
  let component: CustomTableColumnComponent;
  let fixture: ComponentFixture<CustomTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
