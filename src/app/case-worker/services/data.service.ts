import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor( private restcs: RestClientService) {}

  private isDev = isDevMode();
  private caseWorkerApi = environment.serviceUrl.caseWorkerUser;

  public getUserData(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/userData.json');
    } else {
      return this.restcs.get(this.caseWorkerApi);
    }
  }
  public getMsgCount(payload = {}): Observable<any> {
    return this.restcs.get('./assets/mock/msgs.json');
  }
  public getTreatmentPlanData(payload = {}): Observable<any> {
    return this.restcs.get('./assets/mock/treatmentPlan-data.json');
  }
}
