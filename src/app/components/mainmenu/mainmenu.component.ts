import { Component, OnInit, OnDestroy  } from '@angular/core';
import { User } from '../../models/user'
import { AuthService } from '../../services/auth-service'
import { CarRentalService } from '../../services/car-rental.service'

import { Router } from '@angular/router'
@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService,
    public carRentalService: CarRentalService, private router: Router ) { }

    now: Date = new Date();

  ngOnInit() {
    //this.carRentalService.Load();
  }

  ngOnDestroy(){
    this.carRentalService.Save();
  }

  GoHome(){
    this.router.navigate(["/home"])
  }

  Settings(){

  }
  
  GoMyRents()
  {
    this.router.navigate(['/myrents']);
  }

SignUp(){
  this.router.navigate(['/signup']);
}

  GoHomeAdmin(){
    this.router.navigate(["/Homeadmin"])
  }

}
