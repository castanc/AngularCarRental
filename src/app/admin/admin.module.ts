import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { LoginAdminComponent } from './components/login-admin/login-admin.component';
//import { AdminRoutingModule } from './admin-routing.module'


const routes: Routes=[
  {
    path:'admin',
    component: LoginAdminComponent,
  },
]


@NgModule({
  declarations: [LoginAdminComponent],
  imports: [
    CommonModule,
    //AdminRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
