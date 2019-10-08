import { TestBed } from '@angular/core/testing';
import { I18nServiceTestingModule } from 'projects/customjs/i18n';
import { CustomAddressInputService } from './custom-address-input.service';

describe('CustomAddressInputService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [I18nServiceTestingModule],
    })
  );

  it('should be created', () => {
    const service: CustomAddressInputService = TestBed.get(
      CustomAddressInputService
    );
    expect(service).toBeTruthy();
  });
});
