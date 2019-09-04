import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { AppWarpperContentModule } from '../app-warpper-content/app-warpper-content.module';
import { NavbarTestingModule } from '../navbar/testing/navbar-testing.module';
import { AppWrapperPrivateComponent } from './app-wrapper-private.component';

describe('AppWrapperPrivateComponent', () => {
  let component: any;
  let fixture: ComponentFixture<AppWrapperPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppWrapperPrivateComponent],
      imports: [
        RouterTestingModule,
        NavbarTestingModule,
        AppWarpperContentModule,
        MatMenuModule,
        I18nServiceTestingModule.forRoot(AppTranslationKeys),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out', () => {
    // given
    const spy = spyOn(component.authService, 'logout').and.returnValue(true);
    // when
    component.logout();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
