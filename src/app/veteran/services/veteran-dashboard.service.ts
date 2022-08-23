import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VeteranDashboardService {

  //public vetID:number=1;
  private serviceUrl=environment.localUrl;
  constructor(private http: HttpClient) {}

  //getTreatmentPlanData
  getTreatmentData(vetID:number) {
    //return this.http.get<any>(`${this.getTreatmentPlanURL}/${vetID}`);
    return this.http.get<any>(this.serviceUrl+'getTreatmentPlanDetails/'+ vetID);
  }

  //saving TreatmentplanData after summary
  saveTreatmentData(data:any): Observable<any>{
    return this.http.post(this.serviceUrl+'postTreatmentPlanDetails/save',data);
  }


  getName() {
    return this.http.get(
      'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getUserDetails/4'
    );
  }
}
