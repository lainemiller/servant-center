import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private http: HttpClient) {}

  public getRegisterUserDetailsById(id:number) {
    // dev
    // return this.http.get('./assets/mock/consent-data.json');

    //prod
     return this.http.get('https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/getUserDetails/'+id);
  }

  public consentConfirm(userId: number) {
    return this.http.post("https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/acceptConsent/"+userId,{responseType:'text' as 'jason'});
  }
}
