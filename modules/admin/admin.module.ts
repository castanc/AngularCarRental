import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from '../admin/components/login-admin/login-admin.component';



@NgModule({
  declarations: [LoginAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginAdminComponent]
})
export class AdminModule { }
