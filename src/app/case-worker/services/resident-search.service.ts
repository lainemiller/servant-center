import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidentSearchService {
  constructor(private http: HttpClient) {}
  private commonUrl=environment.localUrl;

  getResidentSearchData() {
    return this.http.get(this.commonUrl+'residentSearch/getAll');
    
  }
}
