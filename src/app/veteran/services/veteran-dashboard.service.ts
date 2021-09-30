import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VeteranDashboardService {
  constructor(private http: HttpClient) {}

  getName() {
    return this.http.get('./assets/mock/userData.json');
  }
}
