import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private rs: RestClientService) {}

  private isDev = isDevMode();
  private consentAPI = environment.serviceUrl.consentGetUser;

  public getRegisterUserDetailsById(endPoint: string, payload = {}): Observable<any> {
    if (this.isDev) {
      return this.rs.makeCall('./assets/mock/consent-data.json');
    } else {
      return this.rs.post(this.consentAPI + endPoint, payload);
    }
  }
}
