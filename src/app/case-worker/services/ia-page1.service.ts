import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IaPage1Service {
  constructor(private restcs: RestClientService,private http:HttpClient) {}
  private commonUrl=environment.localUrl;
  private isDev = isDevMode();

  public getIAPage1(vetID:number): Observable<any> {
    if (this.isDev){
    return this.restcs.get(this.commonUrl+'initialAssessment/page-1/'+ vetID);
    } else{
      return this.restcs.get('dev url goes here');
    }
  }
    

  public initialTreatmentGoalsPage1(data:any): Observable<any> {
    if (this.isDev){
    return this.http.post(this.commonUrl+'initialAssessment/page-1',data);
    } else{
      //env api goes here
      return this.http.post('api goes here',data);
    }
}

public PIData( vetId: number): Observable<any> {
  if (this.isDev){
  return this.http.get(this.commonUrl+'getInitialAssessment/page-1/'+vetId);
  } else{
    //env api goes here
    return this.http.post('api goes here', vetId);
  }
}

}
