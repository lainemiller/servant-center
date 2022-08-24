import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssessmentDataService {
  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();
  private commonUrl=environment.localUrl;

  public getData(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'assessmentDetails/4');
        } else {
      //api url to be pasted here instead of mock json url
      return this.restcs.get('./assets/mock/assessment-data.json');
    }
  }
}
