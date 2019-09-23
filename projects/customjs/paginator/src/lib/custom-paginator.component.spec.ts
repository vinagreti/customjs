import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';
import { CustomPaginatorComponent } from './custom-paginator.component';

describe('CustomPaginatorComponent', () => {
  let component: CustomPaginatorComponent;
  let fixture: ComponentFixture<CustomPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPaginatorComponent],
      imports: [MatButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
