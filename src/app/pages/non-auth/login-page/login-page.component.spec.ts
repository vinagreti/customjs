import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { AuthServiceTestingModule } from '@services/auth/testing';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: any;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [AuthServiceTestingModule, I18nServiceTestingModule.forRoot(AppTranslationKeys)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in', () => {
    // given
    const spy = spyOn(component.authService, 'login').and.returnValue(true);
    // when
    component.login();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
