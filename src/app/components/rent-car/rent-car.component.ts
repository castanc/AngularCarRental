import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../../models/Customer' 
import { Car } from '../../models/Car' 
import { CarRentalService } from '../../services/car-rental.service'
import { AuthService } from '../../services/auth-service'
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  carItem:  Car
  brandImage: string = "";
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  customer: Customer;


  constructor(public carRentalService: CarRentalService, public authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
    this.carItem = this.carRentalService.RentedCar;
    this.customer = this.authService.getLoggedCustomer();
    this.carRentalService.Customer = this.customer;
    console.log("rent-car-component carItem:", this.carRentalService.RentedCar)
    console.log("customer:",this.carRentalService.Customer);
    this.brandImage = this.carRentalService.GetBrandImage(this.carRentalService.RentedCar.Brand);
  }

  onSubmit( f: NgForm){
    //todo: send data to service to create a car rejntal instance 
    if ( this.carRentalService.Rent(this.customer.name, this.carItem.Id, f.value.dateFrom, f.value.dateTo))
      this.router.navigate(['/home']);
    else alert(  this.carRentalService.Message)  ;
  }

  cancel(){
    this.router.navigate(['/'])
  }

}
