import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSingleSelectComponent } from './custom-single-select.component';
import { CustomSingleSelectTestingModule } from './testing';

describe('CustomSingleSelectComponent', () => {
  let component: CustomSingleSelectComponent;
  let fixture: ComponentFixture<CustomSingleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomSingleSelectTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
