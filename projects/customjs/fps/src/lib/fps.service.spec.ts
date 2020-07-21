import { TestBed } from '@angular/core/testing';
import { CustomFpsService } from './fps.service';

describe('CustomFpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomFpsService = TestBed.get(CustomFpsService);
    expect(service).toBeTruthy();
  });
});
