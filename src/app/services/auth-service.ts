import { Inject, ɵRenderDebugInfo } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer'
import { CarRentalService } from '../services/car-rental.service'
import { User } from '../models/user'
import { debug } from 'util';

@Inject('')
export class AuthService {

    constructor(public carRentalService: CarRentalService, private router: Router) { }

    Customer: Customer = null
    User:  User = null;

    login(userName: string, password: string): boolean {
        this.Customer = this.carRentalService.GetCustomer(userName)
        if ( this.Customer != null)
        {
          if ( this.Customer.password == password )
          {
            let s = JSON.stringify(this.Customer);
            localStorage.setItem('CustomerLoggedIn', s);
            this.User = null;
            localStorage.removeItem("UserLoggedIn")
            return true
          }
          else
          {
            this.carRentalService.Message = "Invalide passowrd"
            alert(this.carRentalService.Message)
            return false;
          }
        }
      }

      loginAdmin(userName: string, password: string): boolean {
        this.User = this.carRentalService.GetUser(userName)
        if ( this.User != null)
        {
          if ( this.User.password == password )
          {
            localStorage.setItem('UserLoggedIn', this.Customer.name);
            this.User = null;
            return true
          }
          else
          {
            this.carRentalService.Message = "Invalide passowrd"
            alert(this.carRentalService.Message)
            return false;
          }
        }
      }
    
      logout(): void {
        localStorage.removeItem('CustomerLoggedIn');
        localStorage.removeItem("UserLoggedIn")
        this.User = null;
        this.Customer = null;
        this.carRentalService.Save();
        this.router.navigate(['/login']);
      }
    
    getLoggedUser()
    {
        let lu = '';
        lu =  localStorage.getItem('CustomerLoggedIn');
        if ( lu == null )
          lu = '';
        return lu;
        }

    getLoggedCustomer()
    {
        let s = localStorage.getItem('CustomerLoggedIn');
        return JSON.parse(s);
    }
    

        getLoggedAdminUser()
        {
            let lu = '';
            lu =  localStorage.getItem('UserLoggedIn');
            if ( lu == null )
              lu = '';
            return lu;
            }
    
    isLogged(){
        return localStorage.getItem('CustomerLoggedIn') !== null;
    }


    isLoggedAdminUser(){
      return localStorage.getItem('UserLoggedIn') !== null;
  }

}