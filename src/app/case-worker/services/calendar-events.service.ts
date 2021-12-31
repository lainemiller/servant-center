import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventsService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('./assets/mock/calendarEvents.json');
  }
}
