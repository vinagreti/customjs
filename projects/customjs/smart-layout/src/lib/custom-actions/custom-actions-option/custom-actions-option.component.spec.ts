import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomActionsOptionComponent } from './custom-actions-option.component';

describe('CustomActionsOptionComponent', () => {
  let component: CustomActionsOptionComponent;
  let fixture: ComponentFixture<CustomActionsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomActionsOptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomActionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
