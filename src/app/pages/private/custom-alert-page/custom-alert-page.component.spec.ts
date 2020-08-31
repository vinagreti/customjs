import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertTestingModule } from 'projects/customjs/alert/src/public-api';
import { CustomAlertPageComponent } from './custom-alert-page.component';

describe('CustomAlertPageComponent', () => {
  let component: CustomAlertPageComponent;
  let fixture: ComponentFixture<CustomAlertPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAlertPageComponent],
      imports: [AlertTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAlertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
