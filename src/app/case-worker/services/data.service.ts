import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getName() {
    return this.http.get('./assets/mock/userData.json');
  }
  getMsgCount() {
    return this.http.get('./assets/mock/msgs.json');
  }
  getTreatmentPlanData() {
    return this.http.get('./assets/mock/treatmentPlan-data.json');
  }
  getUserData()
  {
    return this.http.get('https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getCaseWorkerDetails/3');
  }
}
