import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Inject('')
export class AuthService {

    constructor(private router: Router) { }

    login(userName: string): void {
        localStorage.setItem('user', userName);
        this.router.navigate(['/']);
      }
    
      logout(): void {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }
    
    getLoggedUser()
    {
        let lu = '';
        lu =  localStorage.getItem('user');
        if ( lu == null )
          lu = '';
        return lu;
        }

    isLogged(){
        return localStorage.getItem('user') !== null;
    }
}