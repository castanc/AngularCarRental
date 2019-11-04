import { Component, OnInit } from '@angular/core';

import { CarRentalService } from '../../services/car-rental.service'
import { AuthService } from '../../services/auth-service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService,
    public carRentalService: CarRentalService ) { }

  ngOnInit() {
  }

}
