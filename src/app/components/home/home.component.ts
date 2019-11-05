import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { CarRentalService } from '../../services/car-rental.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public carRentalService: CarRentalService, public authGuardService: AuthGuardService ) { }

  ngOnInit() {
    console.log("HomeCOmponent")
    this.carRentalService.LoadCars()
  }

}
