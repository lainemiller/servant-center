import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IaPage4Service {
  constructor(private restcs: RestClientService,private http:HttpClient) {}
  private commonUrl=environment.localUrl;
  private isDev = isDevMode();


  public initialTreatmentGoalsPage4(data:any): Observable<any> {
    if (this.isDev){
    return this.http.post(this.commonUrl+'initialAssessment/page-4',data);
    } else{
      //env api goes here
      return this.http.post('api goes here',data);
    }
}
}
