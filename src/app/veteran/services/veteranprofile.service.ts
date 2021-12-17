import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VeteranprofileService {
  constructor(private http: HttpClient) {}

  // public getVeteranProfileDetailsByRecordNumber() {

  //    return this.http.get("./assets/mock/getdata.json");

  // }

  public getProfileData() {
    return this.http.get(
      'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/getUserDetails/7'
    );
  }
}
