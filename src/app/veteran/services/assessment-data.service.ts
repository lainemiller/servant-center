import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDataService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('./assets/mock/assessment-data.json');
  }
}
