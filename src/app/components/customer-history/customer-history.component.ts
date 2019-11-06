import { Component, OnInit } from '@angular/core';
import { CarRental }  from '../../models/car-rental'
import { CarRentalService } from '../../services/car-rental.service'
import { AuthService } from '../../services/auth-service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
  historicRents: Array<CarRental> = []
  constructor(public carRentalService: CarRentalService, public authService: AuthService, public router: Router) { }

  ngOnInit() {
    let customer = this.authService.getLoggedCustomer();
    this.historicRents = this.carRentalService.GetCarsRentalsByCustomer(customer.name);
  }

  goBack(){
    this.router.navigate(['/home']);
  }

}
