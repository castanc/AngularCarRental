import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../../models/Customer' 
import { Car } from '../../models/Car' 
import { CarRentalService } from '../../services/car-rental.service'
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  @Input() carItem:  Car
  brandImage: string = "";
  dateFrom: Date = new Date();
  dateTo: Date = new Date();


  constructor(public carRentalService: CarRentalService, private router: Router) { 
  }

  ngOnInit() {
    this.brandImage = this.carRentalService.GetBrandImage(this.carItem.Brand);
  }

  onSubmit( f: NgForm){
    //todo: send data to service to create a car rejntal instance 
    this.router.navigate(['/home']);
  }

}
