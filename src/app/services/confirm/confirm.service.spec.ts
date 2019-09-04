import { TestBed } from '@angular/core/testing';
import { I18nServiceTestingModule } from '@customjs/i18n';
import { AppTranslationKeys } from '@i18n/i18n-translation-keys';
import { ConfirmService } from './confirm.service';
import { ConfirmServiceTestingModule } from './testing';

describe('ConfirmService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        ConfirmServiceTestingModule,
        I18nServiceTestingModule.forRoot(AppTranslationKeys),
      ],
    })
  );

  it('should be created', () => {
    const service: ConfirmService = TestBed.get(ConfirmService);
    expect(service).toBeTruthy();
  });

  it('should return dialog ref', () => {
    // given
    const service: ConfirmService = TestBed.get(ConfirmService);
    // when
    const dialogRef = service.confirm({
      title: 'title',
      description: 'description',
      confirm: 'confirm',
      reject: 'reject',
      cancel: 'cancel',
      showReject: true,
      showCancel: true,
    });
    // then
    expect(dialogRef).toBeTruthy();
  });
});
