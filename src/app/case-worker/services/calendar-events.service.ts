import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventsService {
  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();

  public getEvents( payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/calendarEvents.json');
    } else {
     
      //api url to be pasted here instead of mock json url
      return this.restcs.get('./assets/mock/calendarEvents.json');
    }
  
  }
}
