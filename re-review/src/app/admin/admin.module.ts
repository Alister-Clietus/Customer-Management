import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddetailsComponent } from './addetails/addetails.component';
import { DeletedetailsComponent } from './deletedetails/deletedetails.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, AddetailsComponent, DeletedetailsComponent, VerifydetailsComponent, UpdatedetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
