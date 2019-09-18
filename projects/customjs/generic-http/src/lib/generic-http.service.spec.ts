import { TestBed } from '@angular/core/testing';

import { GenericHttp } from './generic-http.service';
import { GenericHttpTestingModule } from './testing';

describe('GenericHttp', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      GenericHttpTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: GenericHttp = TestBed.get(GenericHttp);
    expect(service).toBeTruthy();
  });
});
