import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { progressNoteResponse } from 'src/app/shared/models/progressNotes_model';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProgressNotesService {
  constructor(private restcs: RestClientService,private http:HttpClient) {}
  private commonUrl=environment.localUrl;
  private isDev = isDevMode();
  public getNotes(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get(this.commonUrl+'getGoals/4');
    } else {
      //api url to be pasted here instead of mock json url
      return this.restcs.get('./assets/mock/progressNote.json');
    }
  }

  public getCalData(payload = {}): Observable<any> {
    return this.http.get<any>(this.commonUrl+'calendarEvents');
  }
  public postNotes(data:any): Observable<any> {
    return this.http.post(this.commonUrl+'progressNotes/addGoal',data);
}
public postStatus(data:any): Observable<any> {
  return this.http.post(this.commonUrl+'progressNotes/updateGoalStatus/',data);
}
}
