import { HttpClient } from '@angular/common/http';
import { Injectable,isDevMode } from '@angular/core';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment as env} from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResidentSearchService {
  private isDev = isDevMode();
  constructor(private http: HttpClient, private restcs:RestClientService) {}
  private commonUrl=env.localUrl;
  private residentSearchAPI= environment.serviceUrl.getResidentSearchData;

  getResidentSearchData() {
    if(this.isDev){
    return this.restcs.get(this.commonUrl+'residentSearch/getAll');
    } else {
      return this.restcs.get(this.residentSearchAPI);
    }

  }
}
