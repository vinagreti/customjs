import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { AppWarpperContentModule } from '../app-warpper-content/app-warpper-content.module';
import { NavbarTestingModule } from '../navbar/testing/navbar-testing.module';
import { AppWrapperNonAuthComponent } from './app-wrapper-non-auth.component';

describe('AppWrapperNonAuthComponent', () => {
  let component: AppWrapperNonAuthComponent;
  let fixture: ComponentFixture<AppWrapperNonAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppWrapperNonAuthComponent],
      imports: [
        RouterTestingModule,
        NavbarTestingModule,
        AppWarpperContentModule,
        I18nServiceTestingModule.forRoot(AppTranslationKeys),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperNonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
