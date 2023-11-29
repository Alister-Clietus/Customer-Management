import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDTO } from 'src/app/models/signup-dto';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userDTO: SignupDTO = new SignupDTO();
  constructor(private router: Router,private httpservice:HttpserviceService,private commonservice:CommonserviceService) { }

  ngOnInit(): void 
  {

  }

  Signup()
  {
    let url="http://localhost:8075/auth/signup"
    this.httpservice.postdata(url,this.userDTO).subscribe((item:any)=>{
      this.commonservice.ShowToasts('User', 'Create',item.body, 'Success');
      this.router.navigate(['./auth/login']);
    }, 
      error=>{
        if(error.status == "400")
        {
        let msg = "";
        error.error.details.forEach(element => {
            msg = msg + element + "<br>"
        });
        this.commonservice.ShowToasts('User','',msg,'Danger');
    }
  })
  }

  Signupmodal()
  {
    $('#Signupmodal-confirmation-modal').modal('show');
  }

  cancelConfirmation() 
  {
    $('#Signupmodal-confirmation-modal').modal('hide');
  }

}
