import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AppVersion } from './models/version.model';
import { SetCurrentVersion, SetLatestVersion } from './version.actions';

export interface VersionStateModel {
  currentVersion: AppVersion;
  latestVersion: AppVersion;
}

@State<VersionStateModel>({
  name: 'version',
  defaults: {
    currentVersion: undefined,
    latestVersion: undefined,
  }
})
export class VersionState {

  @Selector()
  public static getState(state: VersionStateModel) {
    return state;
  }

  @Selector()
  public static currentVersion(state: VersionStateModel) {
    return state.currentVersion;
  }

  @Selector()
  public static latestVersion(state: VersionStateModel) {
    return state.latestVersion;
  }

  @Action(SetCurrentVersion)
  public setCurrentVersion(ctx: StateContext<VersionStateModel>, { currentVersion }: SetCurrentVersion) {
    ctx.patchState({ currentVersion });
  }

  @Action(SetLatestVersion)
  public setLatestVersion(ctx: StateContext<VersionStateModel>, { latestVersion }: SetLatestVersion) {
    ctx.patchState({ latestVersion });
  }
}
