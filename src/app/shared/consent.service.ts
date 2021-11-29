import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private http: HttpClient) {}

  public getRegisterUserDetailsById() {
    return this.http.get('./assets/mock/consent-data.json');
    // return this.http.get('http://localhost:9000/getUserDetails');
  }

  public consentConfirm(consentReceived: any) {
    return this.http.post('http://localhost:9000/consentConfirm',JSON.stringify(consentReceived),{responseType:'text' as 'json'});
  }
}
