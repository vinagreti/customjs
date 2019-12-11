import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { appTestingMockReadOnlyProperties } from '@testing/functions';
import { UniversalHttpInterceptorService } from './universal-http-interceptor.service';

const NEXT = { handle: () => {} };

const RELATIVE_PATH_REQUEST_TOKEN = {
  protocol: 'http',
  hostname: 'test.com',
  url: '/assets/i18n/location-pt.json',
  get: (item: string) => `test.com:4000`,
  clone: token => JSON.parse(JSON.stringify(token)),
};

const ABSOLUTE_URL_REQUEST_TOKEN = {
  protocol: 'http',
  hostname: 'test.com',
  url: 'http://teste.com/assets/i18n/location-pt.json',
  get: (item: string) => `test.com:4000`,
  clone: token => JSON.parse(JSON.stringify(token)),
};

describe('UniversalHttpInterceptorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        UniversalHttpInterceptorService,
        ModuleMapLoaderModule,
        { provide: REQUEST, useValue: RELATIVE_PATH_REQUEST_TOKEN },
      ],
    }),
  );

  it('should create', () => {
    const service: UniversalHttpInterceptorService = TestBed.get(UniversalHttpInterceptorService);
    expect(service).toBeTruthy();
  });

  it('should mountI18nFolderPath', () => {
    const service: any = TestBed.get(UniversalHttpInterceptorService);
    service.innerRequest = RELATIVE_PATH_REQUEST_TOKEN;
    service.port = undefined;
    const baseUrl = service.mountI18nFolderPath(RELATIVE_PATH_REQUEST_TOKEN);
    expect(baseUrl).toEqual('http://test.com:4000/assets/i18n/location-pt.json');
  });

  it('should use the default port', done => {
    const processEnv = process.env;
    appTestingMockReadOnlyProperties(process, 'env', undefined);
    const service: any = TestBed.get(UniversalHttpInterceptorService);
    expect(service.port).toEqual(environment.serverPort);
    appTestingMockReadOnlyProperties(process, 'env', processEnv);
    done();
  });

  it('should intercept and not change assets url', () => {
    const service: any = TestBed.get(UniversalHttpInterceptorService);
    const incrementSpy = spyOn(service, 'changeRequestUrl').and.callThrough();
    service.intercept(ABSOLUTE_URL_REQUEST_TOKEN, NEXT);
    expect(incrementSpy).not.toHaveBeenCalled();
  });

  it('should intercept and change assets url', () => {
    const service: any = TestBed.get(UniversalHttpInterceptorService);
    const incrementSpy = spyOn(service, 'changeRequestUrl').and.callThrough();
    service.intercept(RELATIVE_PATH_REQUEST_TOKEN, NEXT);
    expect(incrementSpy).toHaveBeenCalled();
  });
});
