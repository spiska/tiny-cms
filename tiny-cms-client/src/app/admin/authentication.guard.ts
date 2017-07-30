import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { appConfig } from '../app.config'
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isLogged()) {
            return true;
        }

        this.router.navigate([appConfig.loginUrl], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
