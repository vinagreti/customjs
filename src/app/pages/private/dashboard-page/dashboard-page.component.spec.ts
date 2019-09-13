import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskTestingModule } from 'projects/customjs/ask/src/lib/ask-testing.module';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      imports: [AskTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask', () => {
    // given
    const spy = spyOn((component as any).askService, 'ask').and.returnValue(
      of('').pipe(take(1))
    );
    // when
    component.onAsk();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
