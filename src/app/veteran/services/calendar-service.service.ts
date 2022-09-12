import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment as env } from 'src/environments/environment';;
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  constructor(private restcs: RestClientService) { }
  private commonUrl=env.localUrl;
  private isDev = isDevMode();
  private getCurrentVeteranEvents = environment.serviceUrl.getCurrentVeteranEvents


  public getVeteranEvents(veteranId:any): Observable<any> {
    if(this.isDev){
      return this.restcs.get(this.commonUrl+'getCurrentVeteranEvents/'+veteranId);
    }else{
      return this.restcs.get(this.getCurrentVeteranEvents+veteranId);
    }
  }
}
