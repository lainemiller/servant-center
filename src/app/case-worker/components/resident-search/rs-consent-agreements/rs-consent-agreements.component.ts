import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-consent-agreements',
  templateUrl: './rs-consent-agreements.component.html',
  styleUrls: ['./rs-consent-agreements.component.scss']
})
export class RsConsentAgreementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rs consent agreements component');
  }

}
