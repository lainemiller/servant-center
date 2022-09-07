import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment as env } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventsService {
  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();
  private commonUrl=env.localUrl;
  private getCaseWorkerEventsAPI=environment.serviceUrl.getCaseWorkerEvents;
  private addCaseWorkerEventsAPI=environment.serviceUrl.addCaseWorkerEvents;

  public postCalendarEvents(requestObj:any):Observable<any>{
    if(this.isDev){
      return this.restcs.post(this.commonUrl+'./postCalendarEvents',requestObj);
    }else{
      return this.restcs.get(this.addCaseWorkerEventsAPI,requestObj);
    }
  }
  public getCalendarEvents(endPoint:number): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'./getCalendarEvents/'+endPoint);
    } else {
      return this.restcs.get(this.getCaseWorkerEventsAPI+endPoint);
    }
  
  }
}
