import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, LoginDTO } from 'src/app/models/login-dto';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { TokenserviceService } from 'src/app/service/tokenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedUserName: string = "";
  userDTO: LoginDTO=new LoginDTO();
  logiin: Login=new Login()
  constructor(private router: Router,private httpservice:HttpserviceService,private commonservice:CommonserviceService,private tokenservice: TokenserviceService) { }

  ngOnInit(): void 
  {

  }

  login()
  {
    let url="http://localhost:8075/auth/login"
    this.httpservice.postdata(url,this.userDTO).subscribe((item:any)=>{
      const token = item.token;
      this.selectedUserName=item.username
      this.logiin=item
      this.httpservice.setUssername(this.logiin.username)
      if(token)
          {
            this.commonservice.ShowToasts('User', 'Create',item.username+" Login sucessful", 'Success');
            this.tokenservice.setToken(token);
            this.router.navigate(['./auth/landing']);
          }
          else
          {
            this.commonservice.ShowToasts('User', 'Create',item.username+" Login Unsucessful", 'Success');
          }
      },
      error=>{
        if(error.status == "400")
        {
          
        let msg = "";
        this.commonservice.ShowToasts('User','Username/Password is incorrect','Username/Password is incorrect','Danger');
        error.error.details.forEach(element => {
            msg = msg + element + "<br>"
        });
        this.commonservice.ShowToasts('User','',msg,'Danger');
    }
  })
  }

  signup()
  {
    this.router.navigate(['./auth/signup']);
  }

}
