import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { AppSessionService } from '@shared/session/app-session.service';

@Injectable()
export class AppRouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private _router: Router,
        private _sessionService: AppSessionService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this._sessionService.usuario) {
            this._router.navigate(['/']);
            return false;
        }

        if (!route.data || !route.data['permission']) {
            return true;
        }

        if (this._sessionService.isGranted(route.data['permission'])) {
            return true;
        }

        this._router.navigate(['/']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
