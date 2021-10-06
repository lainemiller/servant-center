import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeteranprofileService {
   constructor(private http:HttpClient) { }

  public getVeteranProfileDetailsByRecordNumber() {
     return this.http.get("./assets/mock/getdata.json");
  }
}
