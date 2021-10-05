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
}
