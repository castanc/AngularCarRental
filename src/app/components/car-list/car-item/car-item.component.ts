import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../../../models/Customer' 
import { Car } from '../../../models/Car' 
import { CarRentalService } from '../../../services/car-rental.service'

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input() carItem:  Car
  brandImage: string = ""

  constructor(public carRentalService: CarRentalService, private router: Router) { 
  }

  ngOnInit() {
    this.brandImage =  this.carRentalService.GetBrandImage(this.carItem.Brand);
  }


  rentCar(car: Car): void {
    this.carRentalService.RentedCar = car;
    this.router.navigate(['/rentcar']);
    /*
    if (confirm("Do you really want to rent this car? " + car.Brand)) {
      if ( this.carRentalService.Rent(car)) {
          //todo: goto thank you page
          //this.OnCarRented.emit(car.Id)
      }
        
        
      }
      else
      {
        //todo: goto error page
      }
    }
    */
  }
}

