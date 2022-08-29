import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private commonUrl = "http://localhost:3000/"
  //private serviceUrl=environment.localUrl
  constructor(private http: HttpClient, private restcs: RestClientService) {}

  private isDev = isDevMode();
  private caseWorkerApi = environment.serviceUrl.caseWorkerUser;
  
  public getUserData(payload = {}): Observable<any> {
    if (this.isDev) {
     // return this.restcs.get(this.caseWorkerApi);
     return this.restcs.get('./assets/mock/userData.json'); 

    } else {
      return this.restcs.get(this.caseWorkerApi);
    } 
  }

  
  public getMsgCount(payload = {}): Observable<any> {
    //return this.restcs.get('./assets/mock/msgs.json');
   return this.http.get(this.commonUrl+'transportationForm/getTransportationRequests/');
  }

  public getTreatmentPlanData(payload = {}): Observable<any> {
    return this.restcs.get('./assets/mock/treatmentPlan-data.json');
  }
}
