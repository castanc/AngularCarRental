import { Component, OnInit  } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service'
import { CarRental } from '../../models/car-rental'
import { Car } from '../../models/car'

@Component({
  selector: 'app-car-rental-list',
  templateUrl: './car-rental-list.component.html',
  styleUrls: ['./car-rental-list.component.css']
})
export class CarRentalListComponent implements OnInit {
  AvailableCars: Array<Car> = []
  constructor(public carRentalService: CarRentalService) { }

  ngOnInit() {
  }


}
