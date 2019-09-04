import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SetCurrentVersion, SetLatestVersion } from './version.actions';
import { VersionState, VersionStateModel } from './version.state';

describe('Version store', () => {
  const versionMock = '1';

  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([VersionState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    // given
    const expected: VersionStateModel = {
      currentVersion: versionMock,
      latestVersion: versionMock,
    };
    // when
    store.dispatch(new SetCurrentVersion(versionMock));
    store.dispatch(new SetLatestVersion(versionMock));
    const actual = store.selectSnapshot(VersionState.getState);
    // then
    expect(actual).toEqual(expected);
  });

  it('should create new version state', () => {
    // given
    const versionState = new VersionState();
    // then
    expect(versionState).toBeTruthy();
  });

  it('should get currentVersion', () => {
    // when
    store.dispatch(new SetCurrentVersion(versionMock));
    const currentVersion = store.selectSnapshot(VersionState.currentVersion);
    // then
    expect(currentVersion).toEqual(versionMock);
  });

  it('should get latestVersion', () => {
    // when
    store.dispatch(new SetLatestVersion(versionMock));
    const latestVersion = store.selectSnapshot(VersionState.latestVersion);
    // then
    expect(latestVersion).toEqual(versionMock);
  });

});
