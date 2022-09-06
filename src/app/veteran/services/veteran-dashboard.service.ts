import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment as env } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VeteranDashboardService {
  constructor(private http: HttpClient,private restcs: RestClientService) {}

  private isDev = isDevMode();
  private commonUrl=env.localUrl;
  private getVeteranIdAPI=environment.serviceUrl.getVeteranId;
  private addUserAPI=environment.serviceUrl.addUser;
  private addVeteranAPI=environment.serviceUrl.addVeteran;
  private addCaseWorkerAPI=environment.serviceUrl.addCaseWorker;

  //getTreatmentPlanData
  getTreatmentData(vetID:number) {
    return this.http.get<any>(this.commonUrl+'getTreatmentPlanDetails/'+ vetID);
  }

  //saving TreatmentplanData after summary
  saveTreatmentData(data:any): Observable<any>{
    return this.http.post(this.commonUrl+'postTreatmentPlanDetails/save',data);
  }

  public getName(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/userData.json');
    } else {
      return this.http.get(
        'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getUserDetails/4'
      );
    }  
  } 
  // getName() {
  //   return this.http.get(
  //     'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getUserDetails/4'
  //   );
  // }

  getVeteranIdByUsername(endPoint: string):Observable<any>{
    if(this.isDev){
    return this.restcs.get(this.commonUrl+'getVeteranId/'+endPoint)
    }else{
    return this.restcs.get(this.getVeteranIdAPI+endPoint)
    }
  }

  addUser(payload={}):Observable<any>{
    if(this.isDev){
      return this.restcs.post(this.commonUrl+'addUser/'+payload)
    }else{
      return this.restcs.post(this.addUserAPI+payload)
      }
  }

  addVeteran(payload={}):Observable<any>{
    if(this.isDev){
      return this.restcs.post(this.commonUrl+'addVeteran/'+payload)
    }else{
      return this.restcs.post(this.addVeteranAPI)
    }
  }

  addCaseWorker(payload={}):Observable<any>{
    if(this.isDev){
      return this.restcs.post(this.commonUrl+'addVeteran/'+payload)
    }else{
      return this.restcs.post(this.addCaseWorkerAPI)
    }
  }
}
