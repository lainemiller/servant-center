import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../../services/consent.service';

import { Auth } from '@aws-amplify/auth';
import { ConsentResponse } from '../../models/ConsentResponse';

@Component({
  selector: 'app-consent-data',
  templateUrl: './consent-data.component.html',
  styleUrls: ['./consent-data.component.scss'],
})
export class ConsentDataComponent implements OnInit {
  display: boolean = false;
  displayTwo: boolean = false;
  vetran: any;
  consentDetails: any;
  loginId: number = 0;
  email: any;

  constructor(private service: ConsentService) {}

  ngOnInit() {
    this.getVetranDetailsById();
    Auth.currentAuthenticatedUser().then((user) => {
      this.email = user.signInUserSession.idToken.payload.email;
    });
  }

  showConsentForm() {
    this.display = true;
  }

  showDialog() {
    this.displayTwo = true;
  }

  onConsentSubmit() {
    this.loginId = 7;
    let response = this.service.consentConfirm(this.loginId);
    response.subscribe((response)=>{
      console.log(response)
    });
    this.display=false;
  }

  onConsentCancel() {
    Auth.signOut();
  }

  getVetranDetailsById() {
    this.loginId = 7;
    let resp = this.service.getRegisterUserDetailsByLoginId(this.loginId);
    resp.subscribe((data:ConsentResponse) => {
      this.consentDetails = data;
      console.log('Consent API data--->',data);
      this.vetran = this.consentDetails.result[0];
      if (this.vetran.consent_status) {
        this.display = false;
      } else {
        this.display = true;
      }
    });
  }
}
