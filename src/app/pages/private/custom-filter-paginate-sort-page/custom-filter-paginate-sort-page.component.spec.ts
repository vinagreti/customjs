import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilterPaginateSortPageComponent } from './custom-filter-paginate-sort-page.component';

describe('CustomFilterPaginateSortPageComponent', () => {
  let component: CustomFilterPaginateSortPageComponent;
  let fixture: ComponentFixture<CustomFilterPaginateSortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFilterPaginateSortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilterPaginateSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
