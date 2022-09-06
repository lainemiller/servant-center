import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { progressNoteResponse } from 'src/app/shared/models/progressNotes_model';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';
import { environment as env } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ProgressNotesService {
  constructor(private restcs: RestClientService,private http:HttpClient) {}
  private commonUrl=environment.localUrl;
  private isDev = isDevMode();
  private getProgressNotes = env.serviceUrl.getProgressNotes;
  private createProgressNotes = env.serviceUrl.createProgressNotes;
  private updateProgressNotes = env.serviceUrl.updateProgressNotes;
  public getNotes(vetID:number): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'getGoals/'+vetID);
    } else {
      //api url to be pasted here instead of mock json url
      return this.restcs.get(this.getProgressNotes+vetID);
    }
  }

  public getCalData(vetID:number): Observable<any> {
    return this.http.get<any>(this.commonUrl+'calendarEvents');
  }
  public postNotes(vetID:number,data:any): Observable<any> {
    if (this.isDev){
    return this.http.post(this.commonUrl+'progressNotes/addGoal/'+vetID,data);
    } else{
      return this.http.post(this.createProgressNotes+vetID,data);
    }
}
public postStatus(vetID:number,data:any): Observable<any> {
  if (this.isDev){
  return this.http.post(this.commonUrl+'progressNotes/updateGoalStatus/'+vetID,data);
  } else{
    return this.http.post(this.updateProgressNotes+vetID,data);
  }
}
}
