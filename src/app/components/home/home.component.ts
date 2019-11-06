import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { CarRentalService } from '../../services/car-rental.service'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public carRentalService: CarRentalService, public authGuardService: AuthGuardService, public router:  Router) { }

  ngOnInit() {
    console.log("HomeCOmponent")
    this.carRentalService.LoadCars()
  }

  myRents()
  {
    this.router.navigate(['/myrents']);
  }

}
