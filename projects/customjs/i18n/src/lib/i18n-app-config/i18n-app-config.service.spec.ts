import { TestBed } from '@angular/core/testing';
import { I18nAppConfigModule } from './i18n-app-config.module';
import { I18nAppConfigService } from './i18n-app-config.service';

describe('I18nAppConfigService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [I18nAppConfigModule],
    })
  );

  it('should be created', () => {
    const service: I18nAppConfigService = TestBed.get(I18nAppConfigService);
    expect(service).toBeTruthy();
  });

  it('should reload the app on browser side', () => {
    // given
    const service: any = TestBed.get(I18nAppConfigService);
    service.isBrowser = true;
    // when
    const spy = spyOn(service, 'destroyApp').and.callThrough();
    spyOn(service.appModuleRef, 'destroy').and.callFake(() => {});
    service.reloadMainApp();
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should not reload the app on server side', () => {
    // given
    const service: any = TestBed.get(I18nAppConfigService);
    service.isBrowser = false;
    // when
    const spy = spyOn(service, 'destroyApp');
    service.reloadMainApp();
    // then
    expect(spy).not.toHaveBeenCalled();
  });
});
