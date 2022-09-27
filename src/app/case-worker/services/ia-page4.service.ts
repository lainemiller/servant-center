import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';
import { environment as env} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IaPage4Service {
  constructor(private restcs: RestClientService,private http:HttpClient) {}
  private commonUrl=environment.localUrl;
  private isDev = isDevMode();
  private getIAPage4Details = env.serviceUrl.getIAPage4Details;
  private postIAPage4Details = env.serviceUrl.postIAPage4Details;
  public getIAPage4(vetID:number): Observable<any> {
    if (this.isDev){
    return this.restcs.get(this.commonUrl+'initialAssessment/page-4/'+ vetID);
    } else{
      return this.restcs.get(this.getIAPage4Details+vetID);
    }
  }
  public initialTreatmentGoalsPage4(data:any): Observable<any> {
    if (this.isDev){
    return this.http.post(this.commonUrl+'initialAssessment/page-4',data);
    } else{
      //env api goes here
      return this.http.post(this.postIAPage4Details,data);
    }
}
}
