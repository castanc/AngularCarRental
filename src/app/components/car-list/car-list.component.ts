import { Component, OnInit } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service'
import { Car } from '../../models/car'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  AvailableCars: Array<Car> = []
  constructor(public carRentalService: CarRentalService) { 
    this.AvailableCars = this.carRentalService.GetAvailableCars()

  }

  ngOnInit() {
  }

}
