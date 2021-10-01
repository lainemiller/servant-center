import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private http: HttpClient) {}

  public getRegisterUserDetailsById() {
    return this.http.get('./assets/mock/consent-data.json');
  }
}
