import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VeteranDashboardService {
  constructor(private http: HttpClient) {}

  getTreatmentData() {
    return this.http.get<any>('./assets/mock/treatmentPlan-data.json');
  }
  getName() {
    return this.http.get(
      'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getUserDetails/4'
    );
  }
}
