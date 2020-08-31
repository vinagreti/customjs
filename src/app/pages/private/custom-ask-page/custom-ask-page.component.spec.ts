import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskTestingModule } from 'projects/customjs/ask';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomAskPageComponent } from './custom-ask-page.component';

describe('CustomAskPageComponent', () => {
  let component: CustomAskPageComponent;
  let fixture: ComponentFixture<CustomAskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAskPageComponent],
      imports: [AskTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask', () => {
    // given
    const spy = spyOn((component as any).askService, 'ask').and.returnValue(of('').pipe(take(1)));
    // when
    component.onAsk();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
