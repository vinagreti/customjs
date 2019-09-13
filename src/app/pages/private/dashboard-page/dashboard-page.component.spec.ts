import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskTestingModule } from '@customjs/ask';
import { WsModule } from '@customjs/ws';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      imports: [AskTestingModule, WsModule],
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

  it('should sendMessage', () => {
    // given
    const spy = spyOn(
      (component as any).wsConnection.channel,
      'send'
    ).and.returnValue('');
    // when
    component.sendMessage();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
