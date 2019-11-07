import { Injectable } from '@angular/core';
import { Output, OnInit } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminUser } from '../models/admin-user'

@Injectable({
    providedIn: 'root'
  })

export class AdminService{
    adminUser: AdminUser = null;
    
    constructor(public http: HttpClient){}
}