import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/translation-keys.i18n';
import { CustomBackButtonComponent } from './custom-back-button.component';

describe('CustomBackButtonComponent', () => {
  let component: any;
  let fixture: ComponentFixture<CustomBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomBackButtonComponent],
      imports: [
        I18nServiceTestingModule.forRoot(AppTranslationKeys),
        MatIconModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back', () => {
    // given
    const spy = spyOn(component.location, 'back');
    // when
    component.goBack();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
