import { TestBed } from '@angular/core/testing';
import { VersionServiceTestingModule } from './testing';
import { VersionServiceModule } from './version-service.module';
import { VersionService } from './version.service';


describe('VersionServiceModule', () => {

  it('should load the module', () => {
    expect(() => {
      TestBed.configureTestingModule({
        imports: [
          VersionServiceTestingModule,
        ]
      });
    }).not.toThrow();
  });

  it('should not to throw an error if we instantiate the module once', () => {
    expect(() => {
      const instance1 = new VersionServiceModule({} as VersionService, undefined);
    }).not.toThrow();
  });

  it('should throw an error if we instantiate the module more than once', () => {
    expect(() => {
      const instance1 = new VersionServiceModule({} as VersionService, undefined);
      const instance2 = new VersionServiceModule({} as VersionService, instance1);
    }).toThrow();
  });

});
