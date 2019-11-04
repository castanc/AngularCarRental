import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service'

@Injectable()
export class AuthGuardService implements CanActivate {

    loggedUser: string

    constructor(
        private router: Router,
        private authService: AuthService
      ) { }
    

    canActivate() {
        if (!this.authService.isLogged()) {
          this.router.navigate(['/login']);
          return false;
        } else {
          this.loggedUser = this.authService.getLoggedUser();
          return true;
        }
      }

}