import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { VersionServiceTestingModule } from './testing';
import { VersionService } from './version.service';

describe('VersionService', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VersionServiceTestingModule],
    });
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    const service: VersionService = TestBed.inject(VersionService);
    expect(service).toBeTruthy();
  });

  it('should handle connection success if connection went well', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    const message = { type: 'VERSION', value: 1 };
    // when
    spyOn(service.ws, 'connect').and.returnValue({
      error: of('error'),
      message: of(message),
    });

    const spy = spyOn(service, 'handleConnectionSuccessResponse');
    service.connectToVersionWs();
    // expect
    expect(spy).toHaveBeenCalled();
  });

  it('should handle connection error if connection did not went well', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    const message = { type: 'VERSION', value: 1 };
    // when
    spyOn(service.ws, 'connect').and.returnValue({
      error: of('error'),
      message: of(message),
    });

    const spy = spyOn(service, 'handleConnectionErrorResponse');
    service.connectToVersionWs();
    // expect
    expect(spy).toHaveBeenCalled();
  });

  it('should connect if is running on browser and the environment are enabled', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    service.isBrowser = true;
    service.envNotDisabled = true;
    const spy = spyOn(service, 'connectToVersionWs').and.callFake(() => {});
    service.validateAndConnect();
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should not connect if is running on server', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    service.isBrowser = false;
    const spy = spyOn(service, 'connectToVersionWs').and.callFake(() => {});
    service.validateAndConnect();
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not update when client and ws have the same version', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    const spy = spyOn(service, 'saveLatestVersionInMemory').and.callThrough();
    spyOn(service, 'askPermissionToInstallLatestVersion').and.callThrough();
    spyOn(service, 'getLatestVersionInMemory').and.returnValue('1');
    service.compareVersionsAndUpdateIfNeeded('1');
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should update when client and ws have different versions', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    const spy = spyOn(service, 'saveLatestVersionInMemory').and.callThrough();
    spyOn(service, 'askPermissionToInstallLatestVersion').and.callThrough();
    service.compareVersionsAndUpdateIfNeeded('2');
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should compareVersionsAndUpdateIfNeeded if already have an version in memory', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    service.persistLatestVersion('1');
    const spy = spyOn(service, 'compareVersionsAndUpdateIfNeeded').and.callThrough();
    service.detectAndUpdateStoreVersion();
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should not persist version if user not confirms installation', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    spyOn(service.confirmService, 'confirm').and.returnValue(of(false));
    const spy = spyOn(service, 'persistLatestVersion').and.callThrough();
    service.askPermissionToInstallLatestVersion(1);
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should persist version if user confirms installation', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    service.document = {
      location: {
        reload: () => {},
      },
    };
    spyOn(service.confirmService, 'confirm').and.returnValue(of(true));
    const spy = spyOn(service, 'persistLatestVersion').and.callThrough();
    service.askPermissionToInstallLatestVersion(1);
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should init VersionStates if nothing is already', () => {
    // given
    const service: any = TestBed.inject(VersionService);
    // when
    service.document = {
      location: {
        reload: () => {},
      },
    };
    spyOn(service.confirmService, 'confirm').and.returnValue(of(true));
    const spy = spyOn(service, 'persistLatestVersion').and.callThrough();
    service.askPermissionToInstallLatestVersion(1);
    // then
    expect(spy).toHaveBeenCalled();
  });
});
