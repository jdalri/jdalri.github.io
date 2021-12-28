import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return this.canActivate(childRoute, state);
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;
    console.log('canActivate');
    return true;
    // return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    console.log('checkLogin');

    if (this._authService.isLoggedIn()) {
      return true;
    }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    console.log('AuthGuard redirecting');

    // Redirect to the login page
    return this._router.parseUrl('/login');
  }
}
