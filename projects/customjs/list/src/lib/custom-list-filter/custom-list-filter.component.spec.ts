import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomListFilterComponent } from './custom-list-filter.component';
import { CustomListFilterModule } from './custom-list-filter.module';

describe('CustomListFilterComponent', () => {
  let component: CustomListFilterComponent;
  let fixture: ComponentFixture<CustomListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomListFilterModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
