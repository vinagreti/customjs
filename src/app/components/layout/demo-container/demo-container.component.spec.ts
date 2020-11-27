import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomBackButtonModule } from '@components/custom-back-button';
import { DemoContainerComponent } from './demo-container.component';

describe('DemoContainerComponent', () => {
  let component: DemoContainerComponent;
  let fixture: ComponentFixture<DemoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoContainerComponent],
      imports: [CustomBackButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
