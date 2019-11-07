import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(public adminService: AdminService ){
    
  }

  ngOnInit() {
  }

}
