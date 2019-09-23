import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListComponent } from './custom-list.component';
import { CustomListTestingModule } from './testing';

describe('CustomListComponent', () => {
  let component: CustomListComponent;
  let fixture: ComponentFixture<CustomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomListTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
