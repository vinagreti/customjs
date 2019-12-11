import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';

@Injectable()
export class UniversalHttpInterceptorService implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) protected innerRequest: express.Request) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const isrelativePath = request.url.startsWith('/');
    if (isrelativePath) {
      const newRequest = this.changeRequestUrl(request);
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }

  private changeRequestUrl(request) {
    return request.clone({
      url: this.mountI18nFolderPath(request),
    });
  }

  private mountI18nFolderPath(request: HttpRequest<any>) {
    const baseUrl = this.getBaseUrl();
    const finalUrl = `${baseUrl}${request.url}`;
    return finalUrl;
  }

  private getBaseUrl() {
    return `${this.innerRequest.protocol}://${this.innerRequest.get('host')}`;
  }
}
