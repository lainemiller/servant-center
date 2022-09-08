import { Injectable, isDevMode } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthTrackerService {

  private isDev=isDevMode();
  private commonUrl=env.localUrl;
  private getHealthTrackerAPI="";
  private addHealthTrackerAPI="";

  constructor(private restcs:RestClientService) { }

  public getHealthTrackerByVeteranId(endPoint:number): Observable<any>{
    if(this.isDev){
      return this.restcs.get(this.commonUrl+'healthTracker/getHealthTracker/'+endPoint)
    }else{
      return this.restcs.get(this.getHealthTrackerAPI+endPoint);
    }
  }

  public addHealthTrackerByVeteranID(endPoint:number,payload={}): Observable<any>{
    if(this.isDev){
      return this.restcs.post(this.commonUrl+'healthTracker/saveHealthTrackerRequest/'+endPoint,payload)
    }else{
      return this.restcs.post(this.addHealthTrackerAPI+endPoint)
    }
  }
}
