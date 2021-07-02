import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  //Service to handle any http(s) requests

  //get upcoming events
  getUpcomingEvents() {

  }

  getUpcomingEventsSC() {

  }

  //get info from veteran's file
  getVetInfo() {

  }

  //get list of goals for a vet
  getVetGoals() {

  }
}
