import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService 
{

  constructor() { }

  savedToast: any = {};
  toastPosition = "";
  toastType = "";
  ShowToasts(title: string, subtitle: string, message: string, type: string) 
        {
            let iconName = ""
            //  let currentUserDetail = JSON.parse(localStorage.getItem("userDetails"));
            //  let currentConfigDetail = JSON.parse(localStorage.getItem("themeConfig"));
            if (type == "Success") {
                this.toastType = "bg-success";
                iconName = "fas fa-info-circle";
            } else if (type == "Info") {
                this.toastType = "bg-info";
                iconName = "fas fa-info-circle";
            } else if (type == "Warning") {
                this.toastType = "bg-warning";
                iconName = "fas fa-exclamation-circle";
            }
            else if (type == "Danger") {
                this.toastType = "bg-danger";
                iconName = "fas fa-exclamation-triangle";
            }
            if (this.savedToast.position != undefined) {
                if (this.savedToast.position == "TL") {
                    this.toastPosition = "topLeft";
                } else if (this.savedToast.position == "TR") {
                    this.toastPosition = "topRight";
                } else if (this.savedToast.position == "BL") {
                    this.toastPosition = "bottomLeft";
                }
                else if (this.savedToast.position == "BR") {
                    this.toastPosition = "bottomRight";
                }
                else if (this.savedToast.position == "TC") {
                    this.toastPosition = "topCenter";
                }
                else if (this.savedToast.position == "BC") {
                    this.toastPosition = "bottomCenter";
                }
            } else {
                this.toastPosition = "topCenter";
            }


            $(document).Toasts('create', {
                class: this.toastType,
                title: message,
                subtitle: '',
                position: this.toastPosition,
                icon: iconName,
                autohide: true,
                delay: 1000,
            })
            return 1;
        }


        public setStatusCount(statusCountList, data) {
            let total = 0;
            statusCountList.failed = 0;
            for (let index = 0; index < data.length; index++) {
                if (data[index].name == 'PROCESSED') {
                    statusCountList.processd = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'VERIFIED') {
                    statusCountList.verified = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'REJECT') {
                    statusCountList.reject = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'SUCCESS') {
                    statusCountList.success = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name.toUpperCase() == 'FAILED') {
                    statusCountList.failed = statusCountList.failed + data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'REPAIR') {
                    statusCountList.repair = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'DELETE') {
                    statusCountList.delete = data[index].count;
                    total = total + data[index].count;
                }
    
                else if (data[index].name == 'APPLIED') {
                    statusCountList.applied = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'EXCEPT') {
                    statusCountList.except = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'ACCUP') {
                    statusCountList.accup = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'ACCEPTED') {
                    statusCountList.accepted = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'RETURN') {
                    statusCountList.return = data[index].count;
                    total = total + data[index].count;
                }
    
                else if (data[index].name == 'REJECTED') {
                    statusCountList.rejected = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'SENT') {
                    statusCountList.sent = data[index].count;
                    total = total + data[index].count;
                }
    
                else if (data[index].name == 'CANCELLED') {
                    statusCountList.cancelled = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'DELETED') {
                    statusCountList.deleted = data[index].count;
                    total = total + data[index].count;
                } else if (data[index].name == 'ACCEPT') {
                    statusCountList.accept = data[index].count;
                    total = total + data[index].count;
                // } else if (data[index].name == 'CENCELLED') {
                //     statusCountList.cancelled = data[index].count;
                //     total = total + data[index].count;
                }
                else if (data[index].name == 'ACTIVE') {
                    statusCountList.active = data[index].count;
                    total = total + data[index].count;
                }
    
                else if (data[index].name == 'RECEIVED') {
                    statusCountList.received = data[index].count;
                    total = total + data[index].count;
                }
    
                else if (data[index].name == 'INACTIVE') {
                    statusCountList.inactive = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'TO BE CANCEL') {
                  statusCountList.toBeCancel = data[index].count;
                  total = total + data[index].count;
                }
                else if (data[index].name == 'COMPLETE') {
                    statusCountList.complete = data[index].count;
                    total = total + data[index].count;
                }
        else if (data[index].name == 'COMPLETE') {
                    statusCountList.complete = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'PENDING') {
                    statusCountList.pending = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name.toUpperCase() == 'COMPLETED') {
                    statusCountList.completed = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'TOBE') {
                    statusCountList.tobe = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'DEBITR') {
                    statusCountList.debitr = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'AMENDED') {
                    statusCountList.amended = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'NEW') {
                    statusCountList.new = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'REPROCESS') {
                    statusCountList.reprocess = data[index].count;
                    total = total + data[index].count;
                }
                else if (data[index].name == 'PENDING REPROCESS') {
                    statusCountList.pendingReprocess = data[index].count;
                    total = total + data[index].count;
                }
    
            }
            statusCountList.totalStatus = total;
        }






}
