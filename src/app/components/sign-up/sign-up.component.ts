import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Customer } from '../../models/customer'

import { CarRentalService } from '../../services/car-rental.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public carRentalService: CarRentalService,
    private router: Router) { }

  ngOnInit() {
    console.log("sign up")
  }

  onSubmit( f: NgForm){
    console.log("sign=up.submit")
    if ( f.valid)
    {
        let cu = new Customer()
        cu.email = f.value.email
        cu.firstName = f.value.firstName
        cu.lastName = f.value.lastName
        cu.password = f.value.password
        cu.name = f.value.userName

        if (this.carRentalService.AddCustomer(cu))
          this.router.navigate(['/login']);



        

    }
    else this.carRentalService.Message = "Form is invalid.";
  }

}
