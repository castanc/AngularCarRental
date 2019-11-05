import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service'
import { Car } from '../../models/car'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
    OnCarRented: Subscription;
    AvailableCars: Array<Car> = [] 
  constructor(public carRentalService: CarRentalService) {

  }

  ngOnInit() {
    this.AvailableCars = this.carRentalService.GetAvailableCars();
    this.OnCarRented = this.carRentalService.OnCarRented.subscribe(() => {
        console.log("car-list-component OnCarRented envent");
        alert("A car was rented");
        this.AvailableCars = this.carRentalService.GetAvailableCars();
      })
  }

  OnDestroy(){
    if ( this.OnCarRented)
    this.OnCarRented.unsubscribe();
  }
}
