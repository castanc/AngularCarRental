import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer'
import { CarRentalService } from '../services/car-rental.service'
import { User } from '../models/user'

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
            localStorage.setItem('CustomerLoggedIn', this.Customer.name);
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