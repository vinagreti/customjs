import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomjsFileService {
  constructor(@Inject(DOCUMENT) private document: any) {
    this.document.decoraScriptService = this.document.decoraScriptService || {};
  }

  load(url: string, scriptName: string) {
    return new Promise((resolve, reject) => {
      const scriptLoaded = this.document.customjsScriptService[scriptName];

      if (scriptLoaded) {
        const script = this.document[scriptName];

        resolve(script);
      } else {
        const scriptTag = this.document.createElement('script');
        scriptTag.setAttribute('src', url);
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.onload = () => {
          this.document.customjsScriptService[scriptName] = true;
          const script = this.document[scriptName];
          resolve(script);
        };
        scriptTag.onerror = reject;
        this.document.getElementsByTagName('head')[0].appendChild(scriptTag);
      }
    });
  }

  loadStyle(url: string) {
    return new Promise((resolve, reject) => {
      this.document.scriptServiceLoadedStylesArray =
        this.document.scriptServiceLoadedStylesArray || {};
      const styleLoaded = this.document.scriptServiceLoadedStylesArray[url];
      if (styleLoaded) {
        resolve();
      } else {
        const linkTag = this.document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('type', 'text/css');
        linkTag.setAttribute('media', 'all');
        linkTag.setAttribute('href', url);
        linkTag.onerror = reject;
        linkTag.onload = () => {
          this.document.scriptServiceLoadedStylesArray[url] = true;
          resolve();
        };
        this.document.getElementsByTagName('head')[0].appendChild(linkTag);
      }
    });
  }

  loadStyleAndScript(styleUrl, scriptUrl, scriptNamespace) {
    return this.loadStyle(styleUrl).then(() => {
      return this.load(scriptUrl, scriptNamespace);
    });
  }
}
