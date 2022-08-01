import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RestClientService } from './rest-client.service';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private restcs: RestClientService) {}

  private isDev = isDevMode();
  private consentAPI = environment.serviceUrl.consentGetUser;
  private consentConfirmAPI = environment.serviceUrl.consentUpdateUser;
  private commonUrl=env.localUrl;

  public getRegisterUserDetailsById(
    endPoint: number,
    payload = {}
  ): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'consentData');
    } else {
      return this.restcs.get(this.consentAPI + endPoint);
    }
  }

  public consentConfirm(endPoint: number, payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/consent-data.json');
    } else {
      return this.restcs.post(this.consentConfirmAPI + endPoint, payload);
    }
  }
}
