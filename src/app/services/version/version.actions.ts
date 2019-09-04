import { AppVersion } from './models';

export class SetCurrentVersion {
  public static readonly type = '[Version] Set current version';
  constructor(public currentVersion: AppVersion) { }
}

export class SetLatestVersion {
  public static readonly type = '[Version] set latest version';
  constructor(public latestVersion: AppVersion) { }
}
