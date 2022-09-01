import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment.prod';
import { environment as env } from 'src/environments/environment';;
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private serviceUrl=env.localUrl
  private getMsgCountAPI = environment.serviceUrl.getTransportRequestFormData;

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
    if (this.isDev) {
      return this.http.get(this.serviceUrl+'transportationForm/getTransportationRequests/');
    } else {
      return this.http.get(this.getMsgCountAPI);
    }  
  }
  getTreatmentPlanData(vetID:number): Observable<any> {
    return this.http.get(this.serviceUrl+'getTreatmentPlanDetails/'+ vetID);
  }
  public updateTreatmentPlanData(data:any): Observable<any>{
    return this.http.put(this.serviceUrl+'updateTreatmentPlanDetails/save/4',data);
  }
}
