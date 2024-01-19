import {
        CanActivate, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        Router,
        CanActivateChild,
        UrlTree} from "@angular/router";


import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "./auth-service";

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(route, state);
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}