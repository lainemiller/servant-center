import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../../services/consent.service';

import { Auth } from '@aws-amplify/auth';

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
  userId: number = 0;
  email:any;

  constructor(private service: ConsentService) {}

  ngOnInit() {
    this.getVetranDetailsById();
    Auth.currentAuthenticatedUser()
    .then((user) => {
      this.email =
        user.signInUserSession.idToken.payload.email;
        console.log(this.email)
    })
    
  }

  showConsentForm() {
    this.display = true;
  }

  showDialog() {
    this.displayTwo = true;
  }

  onConsentSubmit() {
    this.userId = 5;
    // let response = this.service.consentConfirm(this.userId);
    // response.subscribe();
  }

  onConsentCancel() {
    Auth.signOut();
  }

  getVetranDetailsById() {
    const userId = '3';
    let resp = this.service.getRegisterUserDetailsById(userId);
    resp.subscribe((data) => {
      this.consentDetails = data;
      this.vetran = this.consentDetails.result[0];
      if (this.vetran.consent_status) {
        this.display = false;
      } else {
        this.display = true;
      }
    });
  }
}
