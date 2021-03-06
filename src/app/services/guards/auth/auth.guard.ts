import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@services/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const FALLBACK_PATH = '/login';

type GuardResponse = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): GuardResponse {
    return this.authService.logged$.pipe(
      map(logged => !!logged || this.router.createUrlTree([FALLBACK_PATH])),
    );
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): GuardResponse {
    return this.authService.logged$.pipe(
      map(logged => !!logged || this.router.createUrlTree([FALLBACK_PATH])),
    );
  }
}
