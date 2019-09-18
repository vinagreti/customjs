import { Injectable } from '@angular/core';
import { finalize, share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GenericHttpCallOptions, GenericHttpRequestTypes } from './generic-http.models';

@Injectable({
  providedIn: 'root',
})
export class GenericHttp {

  loading$: Observable<boolean | string>;

  private loadingMap = {};

  private loadingStream$ = new BehaviorSubject<boolean | string>(undefined);

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string, search: any = {}, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    options.params = search;
    const callObservable = this.http.get<T>(url, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  patch<T>(url, body = {}, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    const callObservable = this.http.patch<T>(url, body, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  post<T>(url, body?, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    const callObservable = this.http.post<T>(url, body, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  put<T>(url, body = {}, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    const callObservable = this.http.put<T>(url, body, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  delete<T>(url: string, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    const callObservable = this.http.delete<T>(url, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  upsert<T>(url, payload: any = {}, options?: GenericHttpCallOptions): Observable<T> {
    if (payload.id >= 0) {
      return this.put<T>(url, payload, options);
    } else {
      return this.post<T>(url, payload, options);
    }
  }

  request<T>(method: GenericHttpRequestTypes, url: string, options: GenericHttpCallOptions = {}): Observable<T> {
    const uuid = this.startLoading(options.loadingMessage);
    const callObservable = this.http.request<T>(method, url, options)
      .pipe(
        finalize(() => this.stopLoading(uuid)),
    );
    return this.shareObservable<T>(callObservable);
  }

  private startLoading = (msg: string | boolean = true) => {
    const uuid = Math.random().toString(26).slice(2) + Date.now();
    this.loadingMap[uuid] = msg || true;
    this.emitLoading();
    return uuid;
  }

  private stopLoading = (uuid) => {
    if (this.loadingMap[uuid]) {
      delete this.loadingMap[uuid];
    }
    this.emitLoading();
  }

  private emitLoading = () => {
    const keys = Object.keys(this.loadingMap);
    const hasLoading = keys.length > 0;
    const loadingMessage = this.loadingMap[keys[0]];
    this.loadingStream$.next(hasLoading ? loadingMessage : false);
  }

  /*
  * Share Observable
  *
  * This method is used to avoid calling the server every time the Observable
  * returned by the Angular Http register a subscription.
  *
  */
  private shareObservable<T>(call: Observable<T>) {
    return call.pipe(
      share()
    );
  }
}
