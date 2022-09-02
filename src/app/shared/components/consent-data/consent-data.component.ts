import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../../services/consent.service';

import { Auth } from '@aws-amplify/auth';
import { ConsentResponse } from '../../models/ConsentResponse';
import { ClipBoardService } from '../../services/clip-board.service';

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
  loginId!: number;
  email: any;

  constructor(
    private service: ConsentService,
    private cacheData: ClipBoardService
  ) {}

  ngOnInit() {
    this.loginId = this.cacheData.get('loginId');
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
    let response = this.service.consentConfirm(this.loginId);
    response.subscribe((response) => {
      if (response.responseStatus == 'SUCCESS') {
        console.log(response);
      }
    });
    this.display = false;
  }

  onConsentCancel() {
    Auth.signOut();
  }

  getVetranDetailsById() {
    this.service
      .getRegisterUserDetailsByLoginId(this.loginId)
      .subscribe((data: ConsentResponse) => {
        if (data.responseStatus == 'SUCCESS') {
          this.consentDetails = data;
          console.log('Consent API data--->', data);
          this.vetran = this.consentDetails.data[0];
          if (this.vetran.consent_status) {
            this.display = false;
          } else {
            this.display = true;
          }
        }
      });
  }
}
