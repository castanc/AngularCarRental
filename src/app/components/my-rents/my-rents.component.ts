import { Component, OnInit } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service';
import { AuthService } from '../../services/auth-service'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-my-rents',
  templateUrl: './my-rents.component.html',
  styleUrls: ['./my-rents.component.css']
})
export class MyRentsComponent implements OnInit {

  constructor(public carRentalService: CarRentalService, public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

}
