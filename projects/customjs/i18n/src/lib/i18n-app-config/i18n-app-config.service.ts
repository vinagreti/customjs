import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgModuleRef, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class I18nAppConfigService {
  private isBrowser: boolean;

  constructor(
    private appModuleRef: NgModuleRef<any>,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.detectPlatform();
  }

  reloadMainApp() {
    if (this.isBrowser) {
      this.dispatchDOMContentLoadedEvent();
    }
  }

  private dispatchDOMContentLoadedEvent() {
    const reloadEvent = new Event('DOMContentLoaded');
    document.dispatchEvent(reloadEvent);
  }

  private detectPlatform() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
