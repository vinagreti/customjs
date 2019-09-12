import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskTestingModule } from './ask-testing.module';
import { AskComponent } from './ask.component';

describe('AskComponent', () => {
  let component: AskComponent;
  let componentAsAny: any;
  let fixture: ComponentFixture<AskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AskTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskComponent);
    component = fixture.componentInstance;
    componentAsAny = component;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit confirmation', () => {
    // given component
    const spy = spyOn(component.answer, 'emit').and.returnValue(undefined);
    // when
    component.doConfirm(undefined);
    // then
    expect(spy).toHaveBeenCalled();
  });
});
