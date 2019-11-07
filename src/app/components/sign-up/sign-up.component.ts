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

  email: string = "";
  newPassword: string = ""
  userName:  string = ""
  lastgName: string = ""
  firstName: string = ""
  password: string = ""
  emailText: string = "";

  isValid = false;
  message = "";

  validCustomer = false;


  constructor(public carRentalService: CarRentalService,
    private router: Router) { }


    validateEmail(email:string)
    {
      console.log("ValidateEmail");
      this.isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email);  
      this.message = "";
      if ( !this.isValid)
      {
        this.message = "Invalid email address";
      }

    }

    validateCustomer(name: string):boolean
    {
      this.message = "";
      let c =this.carRentalService.GetCustomer(name);
      this.validCustomer = ( c == null );
      if ( !this.validCustomer )
        this.message = "This name is already used";
      console.log("validatecustomer", name,this.message);
      return this.validCustomer;

    }

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
        cu.phone = f.value.phone

        if (this.carRentalService.AddCustomer(cu))
          this.router.navigate(['/login']);
        else alert(this.carRentalService.Message);
    }
    else this.carRentalService.Message = "Form is invalid.";
  }

}
