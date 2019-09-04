import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';
import { Store } from '@ngxs/store';
import { ConfirmService } from '@services/confirm';
import { CustomWsClientService } from '@services/ws-client';
import { CustomWebsocketMessage, CustomWebsocketMessageTypes } from '@services/ws-client/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppVersion } from './models';
import { SetCurrentVersion, SetLatestVersion } from './version.actions';
import { VersionState } from './version.state';

export const VersionServiceDisabledEnvironments = ['development', 'local'];

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  online$: Observable<boolean>;

  private httpCallInternetConnectionStatus$ = new BehaviorSubject<boolean>(true);

  private isBrowser: boolean;

  private envNotDisabled: boolean;

  constructor(
    private store: Store,
    private confirmService: ConfirmService,
    private ws: CustomWsClientService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.initVersionService();
  }

  private initVersionService() {
    this.detectPlatform();
    this.detectIfEnvUsesAsyncVersionServer();
    this.validateAndConnect();
  }

  private detectPlatform() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private detectIfEnvUsesAsyncVersionServer() {
    this.envNotDisabled = !VersionServiceDisabledEnvironments.includes(environment.name);
  }

  private validateAndConnect() {
    if (this.isBrowser && this.envNotDisabled) {
      this.connectToVersionWs();
    }
  }

  private handleConnectionSuccessResponse = (latestVersion) => {
    this.detectAndUpdateStoreVersion(latestVersion);
    this.httpCallInternetConnectionStatus$.next(true);
  }

  private handleConnectionErrorResponse = () => {
    this.httpCallInternetConnectionStatus$.next(false);
  }

  private detectAndUpdateStoreVersion(latestVersion: AppVersion) {
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
      this.saveLatestVersionInMemory(latestVersion);
      this.askPermissionToInstallLatestVersion(latestVersion);
    }
  }

  private saveLatestVersionInMemory(version: string) {
    this.store.dispatch(new SetLatestVersion(version));
  }

  private initVersionStates(version: string) {
    this.store.dispatch(new SetCurrentVersion(version));
    this.store.dispatch(new SetLatestVersion(version));
  }

  private getCurrentVersion() {
    return this.store.selectSnapshot(VersionState.currentVersion);
  }

  private getLatestVersionInMemory() {
    return this.store.selectSnapshot(VersionState.latestVersion);
  }

  private askPermissionToInstallLatestVersion(latestVersion) {
    this.confirmService.confirm({
      title: 'services.version.downloadNewVersionTitle',
      description: 'services.version.downloadNewVersionDesc',
      confirm: 'label.Update',
      cancel: 'label.Later',
    }).subscribe(confirmed => {
      if (confirmed) {
        this.persistLatestVersion(latestVersion);
        this.reloadApp();
      }
    });
  }

  private persistLatestVersion(latestVersion) {
    this.store.dispatch(new SetCurrentVersion(latestVersion));
  }

  private reloadApp() {
    this.document.location.reload();
  }

  private connectToVersionWs() {
    const host = this.document.location.origin;
    const url = `${host}/v`;
    const wsUrl = url.replace('http', 'ws');
    const connection = this.ws.connect<CustomWebsocketMessage>(wsUrl);
    connection.message
      .pipe(
        filter(message => message.type === CustomWebsocketMessageTypes.VERSION),
        map(message => message.value),
      )
      .subscribe(this.handleConnectionSuccessResponse);
    connection.error.subscribe(this.handleConnectionErrorResponse);
  }

}
