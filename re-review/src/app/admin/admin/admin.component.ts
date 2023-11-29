import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsDTO } from 'src/app/models/details-dto';
import { StatusCountModel } from 'src/app/models/status-count-model';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit 
{
  static obj: AdminComponent;
  userDatatable: any;
  selectedUserName: string = "";
  authusername: String="";
  statusCountList: StatusCountModel = new StatusCountModel();
  dataTableUrl: any;
  constructor(private router: Router,private commonservice: CommonserviceService,private http: HttpserviceService) 
  { 
   }
  initialHead: string[] = ['ID', 'NAME', 'PHONE NUMBER','EMAIL','BLOOD','DOB','STATUS'];
  ngOnInit(): void 
  {
    AdminComponent.obj = this;
    this.getUsers();
    this.authusername=this.http.getUsername()
  }
  search()
  {
    this.userDatatable.draw();
  }
  verifyUSer()
  {
    if (this.userDatatable.rows('.selected').data().length == 0) {
      this.commonservice.ShowToasts('', '', "Please Select a Record To Update.", 'Warning');
    } else if (this.userDatatable.rows('.selected').data().length > 1) {
      this.commonservice.ShowToasts('', '', "Multiple Record You Cannot Update.", 'Warning');
    } else {
      let slectedIdForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].ID);
      let slectedNameForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].NAME);
      let statusForUpdate = this.userDatatable.rows('.selected').data()[0].STATUS;
      if(statusForUpdate=="VERIFIED")
      {
        this.commonservice.ShowToasts('User Details', 'Verify', 'User Details Already Verified !', 'Info');
      }
      else
      {
        this.router.navigate(['./admin/verify',slectedIdForUpdate,slectedNameForUpdate]);
      }
    }
  }
  
  updateUser()
  {
    if (this.userDatatable.rows('.selected').data().length == 0) {
      this.commonservice.ShowToasts('', '', "Please Select a Record To Update.", 'Warning');
    } else if (this.userDatatable.rows('.selected').data().length > 1) {
      this.commonservice.ShowToasts('', '', "Multiple Record You Cannot Update.", 'Warning');
    } else {
      let slectedIdForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].ID);
      let slectedNameForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].NAME);
      this.router.navigate(['./admin/update',slectedIdForUpdate,slectedNameForUpdate]);
    }
    
  }


  createUser()
  {
    this.router.navigate(['./admin/add']);
  }
  deleteUser()
  {
    if (this.userDatatable.rows('.selected').data().length == 0) {
      this.commonservice.ShowToasts('', '', "Please Select a Record To Update.", 'Warning');
    } else if (this.userDatatable.rows('.selected').data().length > 1) {
      this.commonservice.ShowToasts('', '', "Multiple Record You Cannot Update.", 'Warning');
    } else {
      let slectedIdForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].ID);
      let slectedNameForUpdate = window.btoa(this.userDatatable.rows('.selected').data()[0].NAME);
      this.router.navigate(['./admin/delete',slectedIdForUpdate,slectedNameForUpdate]);
    }
  }
  refreshByStatus(status: string)
  {
    $("#status").val(status).trigger("change");
    this.search();
  }
  getUsers() {
    // var token = this.token;//JSON.parse(localStorage.getItem(this._app_config_service.getAppName() + "-" + "tokendetails"));

    this.userDatatable = $('#userList').DataTable({
      "bProcessing": false,
      "bDeferRender": true,
      "ordering": false,
      bAutoWidth: false,
      bServerSide: true,
      // colReorder: {
      //   realtime: false,
      //   order: (this.tableConfigOb.columnOrder).split(',').map(Number)
      // },
      sAjaxSource: "http://localhost:8076/api/search",
      // "iDisplayLength": 10,
      // "aLengthMenu": [[10, 25, 50, 100], [10, 25, 50, 100]],
      // "sPaginationType": "full_numbers",
      // "paging": true,
      "fnServerParams": function (aoData) {
        var dataString = AdminComponent.obj.getSearchInputs();
        aoData.push({ name: "searchParam", value: dataString });
      },
      "fnRowCallback": (nRow, aData, iDisplayIndex, iDisplayIndexFull) => {
        $(nRow).on('click', (event) => {
          // Check if it's a double click
          if ($(this).data('lastClick') && (new Date().getTime() - $(this).data('lastClick') < 500)) {
            // It's a double click
            // Call your function here, passing relevant data
            // For example, you can get the userId from aData
            const userId = aData.userId;
            // Call your function with the userId
            // this.yourDoubleClickFunction();
            console.log(userId)
          }
          // Update last click time
          $(this).data('lastClick', new Date().getTime());
        });
      },
      "fnServerData": (sSource, aoData, fnCallback, oSettings) => {
        oSettings.jqXHR = $.ajax({
          "dataType": 'json',
          "type": "GET",
          "url": sSource,
          "data": aoData,
          // "beforeSend": (xhr) => {
          //   // let token: any = this.commonServiceProvider.getUserDetailsWithToken();
          //   // xhr.setRequestHeader("Authorization", "Bearer " + token.access_token)
          // },
          "success": (data) => { 
            this.commonservice.setStatusCount(this.statusCountList, data.countByStatus);
            fnCallback(data);
          },
          // "success": fnCallback,
          "error": (e) => {
            if (e.status == "403" || e.status == "401") {
              // this.commonServiceProvider.GoToErrorHandling(e);
            }
          }
          // "error": function (e) {
          //   LandingComponent.obj.commonServiceProvider.ShowToasts('User Details', 'Search', e.responseJSON.message, 'Danger');
          // }
        });
      },
      // "bSort": false,
      "sDom": "<rt><'row border-top pt-2'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7'p>>",
      "aoColumns": [/*{"mDataProp": "userId", "bSortable":  false,
                         "mRender": function(data){
                             return '<input type="checkbox">  ' ;
                         }
                     },*/
        { "mDataProp": "ID", "bSortable": false },
        { "mDataProp": "NAME", "bSortable": false },
        { "mDataProp": "PHONENUMBER", "bSortable": false, },
        { "mDataProp": "EMAIL", "bSortable": false, },
        { "mDataProp": "BLOOD", "bSortable": false, },
        { "mDataProp": "DOB", "bSortable": false, },
        
        {
          "mDataProp": "STATUS", "bSortable": false,
          "mRender": function (data) {
            // if (data == 'PROCESSD') {
            //   return "Pending Approval";
            // } else if (data == 'DELETE') {
            //   return "Deleted";
            // } else if (data == 'VERIFIED') {
            //   return "Approved";
            // }
            // return data;

            if (data == 'PROCESSED') {
              return '<span class="badge badge-warning">Pending Approval</span>';
            } else if (data == 'DELETE') {
              return '<span class="badge badge-primary">Pending Deletion</span>';
            } else if (data == 'VERIFIED') {
              return '<span class="badge badge-success">Approved</span>'
            } else if (data == 'REJECT') {
              return '<span class="badge badge-primary ipsh-badge-reject">Rejected</span>'
            } else if (data == 'DELETED') {
              return '<span class="badge badge-danger">Deleted</span>'
            } else if (data == 'RECEIVED') {
              return '<span class="badge badge-primary ipsh-badge-approve">Processed</span>'
            }
            return data;
          }
        }
      ]
    });

    // this.getCheckBoxesModal();
    $('#userList tbody').on('click', 'tr', (event) => {
      // console.log(event);
      $(event.currentTarget).toggleClass('selected');
    });
  }

  clear() {
    $('#idid').val('');
    $('#idname').val('');
    $('#idphonenumber').val('');
    $('#idemail').val('');
    $('#idblood').val('');
    $('#iddob').val('');
    $('#status').val('');
    this.search()
}

  getSearchInputs() 
  {
    // console.log("entered get user search")
    let details: DetailsDTO = new DetailsDTO();
    details.id = $('#idid').val();
    // console.log(bookdto.title)
    details.name = $('#idname').val();
    // console.log(bookdto.author)
    details.email = $('#idemail').val();
    // console.log(bookdto.isbn)
    details.phonenumber = $('#idphonenumber').val();
       // console.log(bookdto.isbn)
    details.dob = $('#iddob').val();
       console.log("fsdfsdfsdfsdf")
       console.log(details.dob)
    details.blood = $('#idblood').val();
    details.status = $('#status').val();
    // console.log(bookdto.numberOfPages)
    if (details.id == null || details.id == undefined) {
      details.id = '';
    }
    if (details.name == null || details.name == undefined) {
      details.name = '';
    }
    if (details.email == null || details.email == undefined) {
      details.email = '';
    }
    if (details.phonenumber == null || details.phonenumber == undefined) {
      details.phonenumber = '';
    }
    if (details.dob == null || details.dob == undefined) {
      details.dob = '';
    }
    if (details.blood == null || details.blood == undefined) {
      details.blood = '';
    }
    // if (details.status == null || details.status == undefined) {
    //   details.status = '';
    // }

    if (Object.keys(details).length > 0) {
      return JSON.stringify(details);
    }
    return "";
  }  //search input function ends here

  Logout()
  {
    this.http.removeUsername();
    this.router.navigate(['./auth/login']);
  }

}
