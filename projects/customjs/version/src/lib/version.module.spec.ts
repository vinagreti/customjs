import { TestBed } from '@angular/core/testing';
import { VersionServiceTestingModule } from './testing';
import { VersionModule } from './version.module';
import { VersionService } from './version.service';

describe('VersionModule', () => {
  it('should load the module', () => {
    expect(() => {
      TestBed.configureTestingModule({
        imports: [VersionServiceTestingModule],
      });
    }).not.toThrow();
  });

  it('should not to throw an error if we instantiate the module once', () => {
    expect(() => {
      const instance1 = new VersionModule({} as VersionService, undefined);
    }).not.toThrow();
  });

  it('should throw an error if we instantiate the module more than once', () => {
    expect(() => {
      const instance1 = new VersionModule({} as VersionService, undefined);
      const instance2 = new VersionModule({} as VersionService, instance1);
    }).toThrow();
  });
});
