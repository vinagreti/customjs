import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const MEMORY_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged$: Observable<string>;

  private innerLoggedState$: Subject<string>;

  private isServer: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.detectPlatform();
    this.createLoggedStatusStreams();
  }

  login(token: string) {
    this.setInMemory(token);
    this.innerLoggedState$.next(token);
    this.router.navigate(['/dashboard']);
    return this.logged$;
  }

  logout() {
    this.setInMemory('');
    this.innerLoggedState$.next('');
    this.router.navigate(['/login']);
    return this.logged$;
  }

  private createLoggedStatusStreams() {
    this.innerLoggedState$ = new BehaviorSubject(this.getFromMemory());
    this.logged$ = this.innerLoggedState$.asObservable();
  }

  private detectPlatform() {
    this.isServer = isPlatformServer(this.platformId);
  }

  private getFromMemory() {
    if (!this.isServer) {
      return localStorage.getItem(MEMORY_KEY) || undefined;
    } else {
      return undefined;
    }
  }

  private setInMemory(token: string) {
    if (!this.isServer) {
      localStorage.setItem(MEMORY_KEY, token);
    }
  }

}
