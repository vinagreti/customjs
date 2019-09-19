import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { AlertTestingModule } from './testing';

describe('AlertService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AlertTestingModule],
    })
  );

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
