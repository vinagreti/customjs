import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nLocale } from '@customjs/i18n';
import { NavbarComponent } from './navbar.component';
import { NavbarTestingModule } from './testing/navbar-testing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavbarTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    // given
    const compiled = fixture.debugElement.nativeElement;
    const componentGeneric = component as any;
    // when
    const spy = spyOn(componentGeneric.i18nService, 'setLocale').and.callFake(() => {});
    componentGeneric.setLanguage(I18nLocale.pt);
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should set locale', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('');
  });

  it('should render the change language buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.locale = I18nLocale.en;
    component.i18nLocales = [I18nLocale.en, I18nLocale.pt];
    fixture.detectChanges();
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
