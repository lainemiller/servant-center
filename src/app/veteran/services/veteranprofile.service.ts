import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment.prod';
import { environment as env} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VeteranprofileService {
  constructor(private restcs: RestClientService,private http:HttpClient) {}

  private isDev = isDevMode();
  private veteranProfileAPI = environment.serviceUrl.veteranProfileGetUser;
  private commonUrl=env.localUrl;

  public getProfileData(
    endPoint: number,
    payload = {}
  ): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'userdetailsVeteran');
    } else {
      return this.restcs.get(this.veteranProfileAPI + endPoint);
    }
  }
  public getUpdate(data:any): Observable<any> {
      return this.http.put(this.commonUrl+'userProfile/updateUserDetails',data);
  }
  
  saveTransportationForm(data:any):Observable<any>{
	return this.http.post(this.commonUrl+'transportationForm/saveTransportationRequest/', data);
  }
}
