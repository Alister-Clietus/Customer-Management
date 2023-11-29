import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsDTO } from 'src/app/models/details-dto';
import { EmbeddedID } from 'src/app/models/embedded-id';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
declare var $: any;
@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.css']
})
export class VerifydetailsComponent implements OnInit {
  selectedUserId: string = "";
  selectedUserName: string = "";
  detailsDTO: DetailsDTO=new DetailsDTO();
  embedded: EmbeddedID=new EmbeddedID();
  constructor(private router: Router,private httpservice: HttpserviceService,private commonservice:CommonserviceService,private route: ActivatedRoute) 
  {

    this.selectedUserId = window.atob(this.route.snapshot.paramMap.get('ID'));
    this.selectedUserName = window.atob(this.route.snapshot.paramMap.get('NAME'));
  }
  validationMessage: any;
  ngOnInit(): void 
  {
    this.validationMessage = {};
    this.getdetailsbyid();
  }

  getdetailsbyid()
  {
    this.embedded.id=this.selectedUserId;
    this.embedded.name=this.selectedUserName;
    this.httpservice.getbyid("http://localhost:8076/api/getid",this.embedded).subscribe((response:any)=>
    {
      // console.log(response)
      this.detailsDTO=response;
      console.log(this.detailsDTO)
    },
    error=>
    {
      if(error.status == "400")
      {
      let msg = "";
      error.error.details.forEach(element => 
        {
          msg = msg + element + "<br>"
        });
      this.commonservice.ShowToasts('User','',msg,'Danger');
      }
  })
  }


  verify()
  {
    $('#verifyuser-confirmation-modal').modal('hide');
    this.embedded.currentuser=this.httpservice.getUsername();
    console.log(this.embedded.currentuser)
    this.httpservice.update("http://localhost:8076/api/verify",this.embedded).subscribe((item: any)=>
    {
      if (item.code.toLowerCase() == "success") 
      {
        this.commonservice.ShowToasts('User', 'Create', item.message, 'Success');
      }
      else 
      {
        if (item.details) 
        {
          item.details.forEach(element => 
            {
            var key = Object.keys(element)[0];
            this.validationMessage[key] = element[key];
          });
        }
        this.commonservice.ShowToasts('User', 'Create', item.message, 'Success');
        
      }
    },
    error=>
    {
      if(error.status == "400")
      {
      let msg = "";
      error.error.details.forEach(element => 
        {
          msg = msg + element + "<br>"
        });
      this.commonservice.ShowToasts('User','',msg,'Danger');
      }
  })
  }

  verifymodal()
  {
    $('#verifyuser-confirmation-modal').modal('show');
  }

   cancelConfirmation() 
   {
    $('#verifyuser-confirmation-modal').modal('hide');
   }

   back()
   {
    this.router.navigate(['./admin/admin']);
   }

   clear()
   {
    
   }

}
