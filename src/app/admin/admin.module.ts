import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
//import { AdminRoutingModule } from './admin-routing.module'


const routes: Routes=[
  { path:'loginadmin',  component: LoginAdminComponent },
  { path:'homeadmin',component: HomeAdminComponent }
]


@NgModule({
  declarations: [LoginAdminComponent, HomeAdminComponent],
  imports: [
    CommonModule,
    //AdminRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
