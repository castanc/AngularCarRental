import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'



const routes: Routes = [

{
    path:'admin',
    loadChildren:() => AdminModule,
  },


 {
    path: '**',
    component: PageNotFoundComponent,
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
