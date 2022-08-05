import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RestClientService } from './rest-client.service';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private restcs: RestClientService,private http:HttpClient) {}

  private isDev = isDevMode();
  private consentAPI = environment.serviceUrl.consentGetUser;
  private consentConfirmAPI = environment.serviceUrl.consentUpdateUser;
  private commonUrl=env.localUrl;

  public getRegisterUserDetailsByLoginId(
    endPoint: number,
    payload = {}
  ): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'consentForm/getUserDetails/'+endPoint);
    } else {
      return this.restcs.get(this.consentAPI + endPoint);
    }
  }

  public consentConfirm(endPoint: number, payload = {}): Observable<any> {
    if (this.isDev) {
      return this.http.put(this.commonUrl+'consentForm/acceptConsent/'+endPoint,payload);
    } else {
      return this.restcs.post(this.consentConfirmAPI + endPoint, payload);
    }
  }
}
