import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmServiceComponent } from './confirm-service.component';
import { ConfirmServiceTestingModule } from './testing';


describe('ConfirmServiceComponent', () => {
  let component: ConfirmServiceComponent;
  let fixture: ComponentFixture<ConfirmServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ConfirmServiceTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm', () => {
    // when
    const emitConfirmed = spyOn(component.confirmed, 'emit');
    component.doConfirm(true);
    // then
    expect(emitConfirmed).toHaveBeenCalled();
  });
});
