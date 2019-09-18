import { Injectable } from '@angular/core';
import { AskService } from '@customjs/ask';
import { I18nService } from '@customjs/i18n';
import { WsService } from '@customjs/ws';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as translationFiles from './i18n/version-service.i18n';

export const STORAGE_KEY = 'custmjsVersion';

export interface VersionServiceData {
  currentVersion?: string;
  latestVersion?: string;
}

export const VersionServiceTranslationKeys = {
  thirdParty: {
    customjs: {
      version: translationFiles.default,
    },
  },
};

export type VersionServiceTranslationKeysMap = typeof VersionServiceTranslationKeys;

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  online$: Observable<boolean>;

  private httpCallInternetConnectionStatus$ = new BehaviorSubject<boolean>(
    true
  );

  private isBrowser: boolean;

  constructor(
    private askService: AskService,
    private wsService: WsService,
    private i18n: I18nService<VersionServiceTranslationKeysMap>
  ) {
    this.initVersionService();
  }

  private initVersionService() {
    this.detectPlatform();
    this.validateAndConnect();
  }

  private detectPlatform() {
    try {
      this.isBrowser = !!window.navigator;
    } catch (error) {
      this.isBrowser = false;
    }
  }

  private validateAndConnect() {
    if (this.isBrowser) {
      // ensure app initialization before start
      setTimeout(() => {
        this.connectToVersionWs();
      }, 0);
    }
  }

  private handleConnectionSuccessResponse(latestVersion) {
    this.detectAndUpdateStoreVersion(latestVersion);
    this.httpCallInternetConnectionStatus$.next(true);
  }

  private handleConnectionErrorResponse() {
    this.httpCallInternetConnectionStatus$.next(false);
  }

  private detectAndUpdateStoreVersion(latestVersion: string) {
    const currentVersion = this.getCurrentVersion();
    if (!currentVersion) {
      this.initVersionStates(latestVersion);
    } else {
      this.compareVersionsAndUpdateIfNeeded(latestVersion);
    }
  }

  private compareVersionsAndUpdateIfNeeded(latestVersion: string) {
    const latestKnownVersion = this.getLatestVersionInMemory();
    const latestVersionIsUnknown = latestKnownVersion !== latestVersion;
    if (latestVersionIsUnknown) {
      this.persistLatestVersion(latestVersion);
      this.askPermissionToInstallLatestVersion(latestVersion);
    }
  }

  private initVersionStates(version: string) {
    const newVersionData = this.getFromMemory();
    newVersionData.latestVersion = version;
    newVersionData.currentVersion = version;
    this.setInMemory(newVersionData);
  }

  private getCurrentVersion() {
    return this.getFromMemory().currentVersion;
  }

  private getLatestVersionInMemory() {
    return this.getFromMemory().latestVersion;
  }

  private askPermissionToInstallLatestVersion(latestVersion) {
    this.askService
      .ask({
        title: this.i18n.trans.thirdParty.customjs.version.title,
        question: this.i18n.trans.thirdParty.customjs.version.question,
        confirm: this.i18n.trans.thirdParty.customjs.version.confirm,
        cancel: this.i18n.trans.thirdParty.customjs.version.cancel,
      })
      .subscribe(confirmed => {
        if (confirmed) {
          this.persistLatestVersion(latestVersion);
          this.reloadApp();
        }
      });
  }

  private persistLatestVersion(latestVersion) {
    const newVersionData = this.getFromMemory();
    newVersionData.latestVersion = latestVersion;
    this.setInMemory(newVersionData);
  }

  private reloadApp() {
    document.location.reload();
  }

  private connectToVersionWs() {
    const host = document.location.origin;
    const url = `${host}/v`;
    const wsUrl = url.replace('http', 'ws');
    const connection = this.wsService.connect<{ type: string; value: any }>(
      wsUrl
    );

    connection.message
      .pipe(
        filter(message => message.type === 'VERSION'),
        map(message => message.value)
      )
      .subscribe(version => {
        this.handleConnectionSuccessResponse(version);
      });

    connection.error.subscribe(() => this.handleConnectionErrorResponse());
  }

  private setInMemory(config) {
    const stringConfig = JSON.stringify(config);
    localStorage.setItem(STORAGE_KEY, stringConfig);
  }

  private getFromMemory(): VersionServiceData {
    let versionServiceData: VersionServiceData = {};
    try {
      const stringConfig = localStorage.getItem(STORAGE_KEY);
      if (stringConfig !== null) {
        versionServiceData = JSON.parse(stringConfig);
      }
    } catch {}
    return versionServiceData;
  }
}
