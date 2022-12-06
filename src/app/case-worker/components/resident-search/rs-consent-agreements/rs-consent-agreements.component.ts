import { Component } from '@angular/core';
import { DataService } from 'src/app/case-worker/services/data.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';

@Component({
  selector: 'app-rs-consent-agreements',
  templateUrl: './rs-consent-agreements.component.html',
  styleUrls: ['./rs-consent-agreements.component.scss'],
})

export class RsConsentAgreementsComponent {
  consentReceived: boolean = false;
  consentNotReceived: boolean = false;
  displayTwo: boolean = false;
  veteran: any;
  consentDetails: any;
  vetId!: number;
  showSpinner: boolean = true;
  grayOut: boolean = true;

  constructor(
    private cacheData: ClipBoardService,
    private service: DataService
  ) {
    this.vetId = this.cacheData.get('selectedResidentVeteranId');
    this.getVetranDetailsById();
  }

  showDialog() {
    this.displayTwo = true;
  }

  getVetranDetailsById() {
    this.service.getConsentById(this.vetId).subscribe((res) => {
      this.consentDetails = res.data[0];
      if (res.responseStatus === 'SUCCESS') {
        if (this.consentDetails.consent_status == true) {
          console.log('Consent API data--->', res);
          this.veteran = this.consentDetails;
          this.consentReceived = true;
          this.showSpinner = false;
          this.grayOut = false;
        } else {
          this.consentNotReceived = true;
          this.showSpinner = false;
          this.grayOut = false;
        }
      }
    });
  }
}
