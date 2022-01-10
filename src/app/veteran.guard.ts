import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class VeteranGuard implements CanActivate {
  group: any;
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.group =
          user.signInUserSession.accessToken.payload['cognito:groups'][0];
        if (this.group == 'Veteran') {
          return true;
        } else {
          this._router.navigate(['/case-worker']);
          return false;
        }
      })
      .catch(() => {
        this._router.navigate(['/login']);
        return false;
      });
    return true;
  }
}
