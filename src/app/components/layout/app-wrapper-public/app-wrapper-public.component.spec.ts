import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { AppWarpperContentModule } from '../app-warpper-content/app-warpper-content.module';
import { NavbarTestingModule } from '../navbar/testing/navbar-testing.module';
import { AppWrapperPublicComponent } from './app-wrapper-public.component';

describe('AppWrapperPublicComponent', () => {
  let component: AppWrapperPublicComponent;
  let fixture: ComponentFixture<AppWrapperPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppWrapperPublicComponent],
      imports: [
        RouterTestingModule,
        NavbarTestingModule,
        AppWarpperContentModule,
        I18nServiceTestingModule.forRoot(AppTranslationKeys),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
