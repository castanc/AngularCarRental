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
  brandImage: string = this.carRentalService.GetBrandImage(this.carItem.Brand);

  constructor(public carRentalService: CarRentalService, private router: Router) { }

  ngOnInit() {
  }


  rentCar(car: Car): void {
    if (confirm("Do you realy want to rent this car? " + car.Brand)) {
      if ( this.carRentalService.Rent(car)) {
          //todo: goto thank you page
      }
      else
      {
        //todo: goto error page
      }
    }
  }

}
