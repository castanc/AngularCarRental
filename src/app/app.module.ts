import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { CarListComponent } from './components/car-list/car-list.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

import { CarRentalService } from '../app/services/car-rental.service'
import { AuthService } from '../app/services/auth-service'
import { AuthGuardService } from '../app/services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: CarListComponent, canActivate: [AuthGuardService]},
  { path: 'CarList', component: CarListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    CarListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarRentalService,AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
