import { Component, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { EventEmitter } from "@angular/core";
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userLogin = new EventEmitter<string>();

  userName: string;
  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.userName = "";
  }
  loginUser() {
    this.authService.login(this.userName);
  }

  canLogin() {
    return this.userName.length > 5;
  }
}
