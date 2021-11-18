import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../../consent.service';

class ConsentUserDetails{
  firstName:string | undefined
  lastName:string | undefined
  email:string | undefined
  consentReceived:Date | undefined
}
@Component({
  selector: 'app-consent-data',
  templateUrl: './consent-data.component.html',
  styleUrls: ['./consent-data.component.scss'],
})


export class ConsentDataComponent implements OnInit {
  display: boolean = false;
  display_two: boolean = false;
  vetran: any;
  userDetails: ConsentUserDetails=new ConsentUserDetails() ;
  details:any;

  constructor(private service: ConsentService) {}

  ngOnInit(): void {
    this.display = true;
    this.getVetranDetailsById();
  }

  showConsentForm() {
    this.display = true;
  }

  showDialog() {
    this.display_two = true;
  }

  onConsentSubmit(){
    this.display = false;
    let consentReceived="received";
    console.log("inside consent submit method",consentReceived)
    this.userDetails.firstName="akash"
    this.userDetails.lastName="kumar"
    this.userDetails.email="akash@gmail.com"
    var data=new Date();
    this.userDetails.consentReceived=data;
    console.log("check",this.userDetails)
    let response=this.service.consentConfirm(this.userDetails);
    response.subscribe((data)=>{this.details=data
      console.log("on submit data"+data)
    })
  }

  getVetranDetailsById() {
    let resp = this.service.getRegisterUserDetailsById();
    resp.subscribe((data) => {
      this.vetran = data;
      console.log("check api",this.vetran.firstName)
    });
  }
}
