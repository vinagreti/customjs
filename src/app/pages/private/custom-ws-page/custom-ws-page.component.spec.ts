import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WsModule } from 'projects/customjs/ws';
import { CustomWsPageComponent } from './custom-ws-page.component';

describe('CustomWsPageComponent', () => {
  let component: CustomWsPageComponent;
  let fixture: ComponentFixture<CustomWsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomWsPageComponent],
      imports: [WsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sendMessage', () => {
    // given
    const spy = spyOn((component as any).wsConnection.channel, 'send').and.returnValue('');
    // when
    component.sendMessage();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
