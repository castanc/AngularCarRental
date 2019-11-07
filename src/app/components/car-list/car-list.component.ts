import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service'
import { Car } from '../../models/car'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
    OnCarRented: Subscription;
    AvailableCars: Array<Car> = [] 
  constructor(public carRentalService: CarRentalService, public router: Router) {

  }

  ngOnInit() {
    this.AvailableCars = this.carRentalService.GetAvailableCars();
    this.OnCarRented = this.carRentalService.OnCarRented.subscribe(() => {
        console.log("car-list-component OnCarRented envent");
        //alert("Subscription message to OnCarRented: A car was rented");
        this.AvailableCars = this.carRentalService.GetAvailableCars();
      })
  }

  OnDestroy(){
    if ( this.OnCarRented)
    this.OnCarRented.unsubscribe();
  }

  myRents(){
    this.router.navigate(['/myrents'])
  }
}
