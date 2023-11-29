import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddetailsComponent } from './addetails/addetails.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { DeletedetailsComponent } from './deletedetails/deletedetails.component';


const routes: Routes = 
[
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"verify/:ID/:NAME",component:VerifydetailsComponent
  },
  {
    path:"update/:ID/:NAME",component:UpdatedetailsComponent
  },
  {
    path:"delete/:ID/:NAME",component:DeletedetailsComponent
  },
  {
    path:"add",component:AddetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
