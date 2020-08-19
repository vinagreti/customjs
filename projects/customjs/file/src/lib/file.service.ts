import { Injectable } from '@angular/core';
import { CustomjsLoadedFilesMap } from './file.models';

@Injectable({
  providedIn: 'root',
})
export class CustomjsFileService {
  private loadedFiles: CustomjsLoadedFilesMap = {
    js: {},
    style: {},
  };

  private innerWindow = window;

  constructor() {}

  loadJs(url: string, scriptName: string) {
    return new Promise((resolve, reject) => {
      const scriptLoaded = this.loadedFiles.js[scriptName];
      if (scriptLoaded) {
        const script = this.innerWindow[scriptName];
        resolve(script);
      } else {
        const scriptTag = this.innerWindow.document.createElement('script');
        scriptTag.setAttribute('async', '1');
        scriptTag.setAttribute('src', url);
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.onerror = reject;

        if ((scriptTag as any).readyState) {
          // IE
          const ieScriptTag: any = scriptTag;
          ieScriptTag.onreadystatechange = () => {
            const loaded = ['loaded', 'complete'].includes(ieScriptTag.readyState);
            if (loaded) {
              this.loadedFiles.style[url] = true;
              resolve();
            }
          };
        } else {
          scriptTag.onload = () => {
            this.loadedFiles.js[scriptName] = true;
            const script = this.innerWindow[scriptName];
            resolve(script);
          };
        }

        this.innerWindow.document.getElementsByTagName('head')[0].appendChild(scriptTag);
      }
    });
  }

  loadStyle(url: string) {
    return new Promise((resolve, reject) => {
      const styleLoaded = this.loadedFiles.style[url];
      if (styleLoaded) {
        resolve();
      } else {
        const linkTag = this.innerWindow.document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('type', 'text/css');
        linkTag.setAttribute('media', 'all');
        linkTag.setAttribute('href', url);
        linkTag.onerror = reject;
        linkTag.onload = () => {
          this.loadedFiles.style[url] = true;
          resolve();
        };
        this.innerWindow.document.getElementsByTagName('head')[0].appendChild(linkTag);
      }
    });
  }

  loadStyleAndScript(styleUrl, scriptUrl, scriptNamespace) {
    return this.loadStyle(styleUrl).then(() => {
      return this.loadJs(scriptUrl, scriptNamespace);
    });
  }
}
