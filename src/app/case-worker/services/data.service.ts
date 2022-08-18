import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { environment as prodenv } from 'src/environments/environment.prod';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor( private restcs: RestClientService,private http: HttpClient) {}

  private isDev = isDevMode();
  private caseWorkerApi = prodenv.serviceUrl.caseWorkerUser;
  private serviceUrl=environment.localUrl;
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
  getTreatmentPlanData(vetID:number): Observable<any> {
    return this.http.get(this.serviceUrl+'getTreatmentPlanDetails/'+ vetID);
  }
}
