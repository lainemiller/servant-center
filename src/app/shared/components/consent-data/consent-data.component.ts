import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../../services/consent.service';

@Component({
  selector: 'app-consent-data',
  templateUrl: './consent-data.component.html',
  styleUrls: ['./consent-data.component.scss'],
})
export class ConsentDataComponent implements OnInit {
  display: boolean = false;
  display_two: boolean = false;
  vetran: any;

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

  getVetranDetailsById() {
    const userId = '3';
    let resp = this.service.getRegisterUserDetailsById(userId);
    resp.subscribe((data) => {
      this.vetran = data;
    });
  }
}
