import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { CarListComponent } from './components/car-list/car-list.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

import { CarRentalService } from '../app/services/car-rental.service'
import { AuthService } from '../app/services/auth-service'
import { AuthGuardService } from '../app/services/auth-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarItemComponent } from './components/car-list/car-item/car-item.component';
import { CarRentalListComponent } from './components/car-rental-list/car-rental-list.component';
import { CarRentalItemComponent } from './components/car-rental-list/car-rental-item/car-rental-item.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';
import { HistoryItemComponent } from './components/customer-history/history-item/history-item.component'
import { DateTransformPipe } from './common/DateTransorm.Pipe';
import { MyRentsComponent } from './components/my-rents/my-rents.component';
import { EmailValidator } from './common/validate-email-directive'
import { validateEmailFactory } from './common/validate-email-factory'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { AdminModule } from './admin/admin.module'
//import { AdminRoutingModule } from './admin/admin-routing.module'
//import { AppRoutingModule } from './app.routing.module'



const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'rentcar', component: RentCarComponent,canActivate: [AuthGuardService] },
  { path: 'myrents', component: MyRentsComponent,canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    CarListComponent,
    PageNotFoundComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarItemComponent,
    CarRentalListComponent,
    CarRentalItemComponent,
    RentCarComponent,
    CustomerHistoryComponent,
    HistoryItemComponent,
    DateTransformPipe,
    MyRentsComponent,
    EmailValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    //AdminModule,
    //AdminRoutingModule,
    //AppRoutingModule
    
  ],
  exports: [DateTransformPipe],
  providers: [CarRentalService,AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
