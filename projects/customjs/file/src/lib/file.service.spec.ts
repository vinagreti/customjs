import { TestBed } from '@angular/core/testing';
import { CustomjsFileService } from './file.service';

describe('CustomjsFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomjsFileService = TestBed.inject(CustomjsFileService);
    expect(service).toBeTruthy();
  });
});
