import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidentSearchService {
  constructor(private http: HttpClient) {}

  getResidentSearchData() {
    return this.http.get('./assets/mock/resident-search.json');
  }
}
