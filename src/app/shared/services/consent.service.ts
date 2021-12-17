import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private restcs: RestClientService) {}

  private isDev = isDevMode();
  private consentAPI = environment.serviceUrl.consentGetUser;
  private consentConfirmAPI = environment.serviceUrl.consentUpdateUser;

  public getRegisterUserDetailsById(
    endPoint: number,
    payload = {}
  ): Observable<any> {
    if (this.isDev) {
      return this.restcs.makeCall('./assets/mock/consent-data.json');
    } else {
      return this.restcs.makeCall(this.consentAPI + endPoint);
    }
  }

  public consentConfirm(endPoint: string, payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.makeCall('./assets/mock/consent-data.json');
    } else {
      return this.restcs.post(this.consentConfirmAPI + endPoint, payload);
    }
  }
}
