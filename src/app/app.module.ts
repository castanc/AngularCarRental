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


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
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
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarRentalService,AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
