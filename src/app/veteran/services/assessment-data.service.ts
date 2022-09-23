import { Injectable, isDevMode } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';
import { environment as env } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AssessmentDataService {
  public responseCache = new Map();

  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();
  private commonUrl=environment.localUrl;
  private getAssessmentData = env.serviceUrl.getAssessmentData;

  public getData( vetID: number): Observable<any> {
    const dataFromCache = this.responseCache.get(URL);
    // if (this.isDev) {
    //   return this.restcs.get(this.commonUrl+'assessmentDetails/'+vetID);
    // } else {
    //   //api url to be pasted here instead of mock json url
    //   return this.restcs.get(this.getAssessmentData+vetID);
    // }

    if (dataFromCache) {
      return of (dataFromCache)
    } 
    const response = this.restcs.get(this.getAssessmentData+vetID);
    response.subscribe(data => this.responseCache.set(URL, data));
    return response;
  }
}
