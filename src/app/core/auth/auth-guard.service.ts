import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router,
		private authService: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authService.loggedIn()) {
			return true;
		}

		this.router.navigate(['/login', { returnUrl: state.url }]);
		return false;
	}
}