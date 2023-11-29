import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsDTO } from 'src/app/models/details-dto';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
declare var $: any;
@Component({
  selector: 'app-addetails',
  templateUrl: './addetails.component.html',
  styleUrls: ['./addetails.component.css']
})
export class AddetailsComponent implements OnInit {
  validationMessage: any;
  constructor(private router: Router,private httpservice: HttpserviceService,private commonservice:CommonserviceService) { }
  detailsDTO: DetailsDTO=new DetailsDTO();
  ngOnInit(): void 
  {
    this.validationMessage = {};
  }

  add()
  {
    this.validationMessage = {};
    $('#adduser-confirmation-modal').modal('hide');
    this.detailsDTO.createdby=this.httpservice.getUsername();
    console.log(this.detailsDTO.createdby)
    this.httpservice.postdata("http://localhost:8076/api/add",this.detailsDTO).subscribe((item: any)=>
    {
      if (item.code.toLowerCase() == "success") 
      {
        this.commonservice.ShowToasts('User', 'Create', item.message, 'Success');
        this.clear()
      }
      else 
      {
        if (item.details) 
        {
          this.commonservice.ShowToasts('User', 'Create', "Validation Error Occured", 'Success');
          item.details.forEach(element => 
            {
            var key = Object.keys(element)[0];
            this.validationMessage[key] = element[key];
            
          });
        }        
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
  addmodal()
  {
    $('#adduser-confirmation-modal').modal('show');
  }

   cancelConfirmation() 
   {
    $('#adduser-confirmation-modal').modal('hide');
   }

   back()
   {
    this.router.navigate(['./admin/admin']);
   }

   clear()
   {
    $("#id").val("");
    $("#name").val("");
    $("#email").val("");
    $("#number").val("");
    $("#blood").val("");
    $("#date").val("");
   }

}
