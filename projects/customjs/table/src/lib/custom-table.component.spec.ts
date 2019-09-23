import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableComponent } from './custom-table.component';
import { CustomTableTestingModule } from './testing';

describe('CustomTableComponent', () => {
  let component: CustomTableComponent;
  let fixture: ComponentFixture<CustomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomTableTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
