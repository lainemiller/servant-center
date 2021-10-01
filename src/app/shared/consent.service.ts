import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private http: HttpClient) {}

  public getRegisterUserDetailsById() {
    return this.http.get(
      'https://my-json-server.typicode.com/akashkumar64/testapi/user/1'
    );
  }
}
