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
      console.log("canactivate. isLogged: ",this.authService.isLogged() )
        if (!this.authService.isLogged()) {
          return false;
        } else {
          this.loggedUser = this.authService.getLoggedUser();
          return true;
        }
      }

}