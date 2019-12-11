import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthServiceTestingModule } from './testing/auth-service-testing.module';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AuthServiceTestingModule],
    }),
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should not set token in memory if in server side', () => {
    // given
    const service: any = TestBed.get(AuthService);
    // when
    const spy = spyOn(localStorage, 'getItem');
    service.isServer = true;
    service.getFromMemory();
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not get token from memory if in server side', () => {
    // given
    const service: any = TestBed.get(AuthService);
    // when
    const spy = spyOn(localStorage, 'setItem');
    service.isServer = true;
    service.setInMemory('lkasjdfh');
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should log in', () => {
    // given
    const token = 'xyz';
    const service: any = TestBed.get(AuthService);
    const spy = spyOn(service.router, 'navigate').and.returnValue(true);
    // when
    service.login(token);
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should log out', () => {
    // given
    const service: any = TestBed.get(AuthService);
    const spy = spyOn(service.router, 'navigate').and.returnValue(true);
    // when
    service.logout();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
