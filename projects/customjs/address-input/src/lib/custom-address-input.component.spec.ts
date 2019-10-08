import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAddressInputComponent } from './custom-address-input.component';
import { CustomAddressInputTestingModule } from './testing/custom-address-input-tsting.module';

describe('CustomAddressInputComponent', () => {
  let component: CustomAddressInputComponent;
  let fixture: ComponentFixture<CustomAddressInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomAddressInputTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddressInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
