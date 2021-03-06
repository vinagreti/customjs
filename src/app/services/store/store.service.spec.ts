import { async, TestBed } from '@angular/core/testing';
import { ClearStoreReaducer } from '@core/redux/ngxs-logout-clean.reducer';
import { NgxsModule, NGXS_PLUGINS, Store } from '@ngxs/store';
import { StoreService } from './store.service';

describe('StoreService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot()],
      providers: [{ provide: NGXS_PLUGINS, useValue: ClearStoreReaducer, multi: true }],
    }),
  );

  it('should be created', () => {
    const service: StoreService = TestBed.inject(StoreService);
    expect(service).toBeTruthy();
  });

  it('should clear the store', async(() => {
    const store: Store = TestBed.inject(Store);
    const service: StoreService = TestBed.inject(StoreService);
    service.clear();
    const localization = store.snapshot();
    expect(localization).toBeUndefined();
  }));
});
