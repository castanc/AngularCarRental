import { Component, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { EventEmitter } from "@angular/core";
import { AuthService } from '../../services/auth-service';
import { CarRentalService } from '../../services/car-rental.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userLogin = new EventEmitter<string>();

  userName: string;
  constructor(
    public carRentalService: CarRentalService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    console.log("login")
    this.userName = "";
    if ( this.carRentalService.NoCustomers )
      this.router.navigate(['/signup']);
  }

  onSubmit( f: NgForm){
    if ( this.authService.login(f.value.userName,f.value.password))
    {
      this.carRentalService.Customer = this.authService.Customer;
      this.carRentalService.user = this.authService.User;
      this.router.navigate(['/home']);
    }

  }

  loginUser() {
    //this.authService.login(this.userName);
  }

  canLogin() {
    return this.userName.length > 5;
  }
}
