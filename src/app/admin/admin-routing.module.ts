import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LoginAdminComponent } from '../admin/components/login-admin/login-admin.component'


const routes: Routes=[
  {
    path:'/admin',
    component: LoginAdminComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
