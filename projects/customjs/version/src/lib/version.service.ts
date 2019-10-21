import { Injectable, Injector } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AskService } from '@customjs/ask';
import { I18nService } from '@customjs/i18n';
import { WsService } from '@customjs/ws';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { VersionServiceTranslationKeysMap } from './version-internal.i18n';

export const STORAGE_KEY = 'custmjsVersion';

export interface VersionServiceData {
  currentVersion: string;
  latestVersion: string;
}

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  data$ = new ReplaySubject<VersionServiceData>();

  online$: Observable<boolean>;

  private httpCallInternetConnectionStatus$ = new BehaviorSubject<boolean>(
    true
  );

  private isBrowser: boolean;

  private ngSw: SwUpdate;

  constructor(
    private askService: AskService,
    private wsService: WsService,
    private i18n: I18nService<VersionServiceTranslationKeysMap>,
    private injector: Injector
  ) {
    this.initVersionService();
  }

  installLatestVersion() {
    const currentVersion = this.getLatestVersionInMemory();
    this.persistCurrentVersion(currentVersion);
    this.updateSw().then(() => {
      this.reloadApp();
    });
  }

  private injectSwUpdate() {
    this.ngSw = this.injector.get(SwUpdate);
  }

  private updateSw() {
    return new Promise(resolve => {
      if (this.ngSw.isEnabled) {
        this.ngSw.checkForUpdate().then(() => {
          this.ngSw.activateUpdate().then(() => {
            resolve();
          });
        });
      } else {
        resolve();
      }
    });
  }

  private connectToDataStream() {
    this.data$.subscribe(data => {
      this.setInMemory(data);
    });
  }

  private initVersionService() {
    this.setCurrentData();
    this.injectSwUpdate();
    this.connectToDataStream();
    this.detectPlatform();
    this.validateAndConnect();
  }

  private setCurrentData() {
    const data = this.getFromMemory();
    this.data$.next(data);
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
    const versionData = this.getCurrentVersionInMemory();
    if (!versionData) {
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
      this.askPermissionToInstallLatestVersion();
    }
  }

  private initVersionStates(version: string) {
    const newVersionData: VersionServiceData = {
      currentVersion: version,
      latestVersion: version,
    };
    this.data$.next(newVersionData);
  }

  private getCurrentVersionInMemory() {
    return this.getFromMemory().currentVersion;
  }

  private getLatestVersionInMemory() {
    return this.getFromMemory().latestVersion;
  }

  private askPermissionToInstallLatestVersion() {
    this.askService
      .ask({
        title: this.i18n.trans.thirdParty.customjs.version.title,
        question: this.i18n.trans.thirdParty.customjs.version.question,
        confirm: this.i18n.trans.thirdParty.customjs.version.confirm,
        cancel: this.i18n.trans.thirdParty.customjs.version.cancel,
      })
      .subscribe(confirmed => {
        if (confirmed) {
          this.installLatestVersion();
        }
      });
  }

  private persistLatestVersion(latestVersion) {
    const newVersionData = this.getFromMemory();
    newVersionData.latestVersion = latestVersion;
    this.data$.next(newVersionData);
  }

  private persistCurrentVersion(currentVersion) {
    const newVersionData = this.getFromMemory();
    newVersionData.currentVersion = currentVersion;
    this.data$.next(newVersionData);
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

  private setInMemory(data: VersionServiceData) {
    const stringConfig = JSON.stringify(data);
    localStorage[STORAGE_KEY] = stringConfig;
  }

  private getFromMemory(): VersionServiceData {
    const stringConfig = localStorage[STORAGE_KEY] || '{}';
    return JSON.parse(stringConfig);
  }
}
