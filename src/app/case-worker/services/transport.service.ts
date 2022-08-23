import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TransportService {
  private serviceUrl=environment.localUrl

  constructor(private http: HttpClient) {}
  getTransportRequestFormData() {
	  return this.http.get(this.serviceUrl+'transportationForm/getTransportationRequests/');
  }
  approveTransportationForm(data:any):Observable<any>{
	  return this.http.post(this.serviceUrl+'transportationForm/approveTransportationRequests', data);
  }

}
