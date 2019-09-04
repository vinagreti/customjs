import { async, TestBed } from '@angular/core/testing';
import { ClearStoreReaducer } from '@core/redux/ngxs-logout-clean.reducer';
import { NgxsModule, NGXS_PLUGINS, Store } from '@ngxs/store';
import { VersionState } from '@services/version';
import { StoreService } from './store.service';


describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgxsModule.forRoot([VersionState]),
    ],
    providers: [
      { provide: NGXS_PLUGINS, useValue: ClearStoreReaducer, multi: true }
    ]
  }));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });

  it('should clear the store', async(() => {
    const store: Store = TestBed.get(Store);
    const service: StoreService = TestBed.get(StoreService);
    service.clear();
    const localization = store.selectSnapshot(VersionState.currentVersion);
    expect(localization).toBeUndefined();
  }));
});
