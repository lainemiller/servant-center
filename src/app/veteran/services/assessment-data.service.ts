import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class AssessmentDataService {
  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();
  public getData(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/assessment-data.json');
    } else {
      //api url to be pasted here instead of mock json url
      return this.restcs.get('./assets/mock/assessment-data.json');
    }
  }
}
