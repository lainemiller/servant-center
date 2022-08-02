import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { progressNoteResponse } from 'src/app/shared/models/progressNotes_model';
import { RestClientService } from 'src/app/shared/services/rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProgressNotesService {
  constructor(private restcs: RestClientService) {}
  private isDev = isDevMode();
  public getNotes(payload = {}): Observable<any> {
    if (this.isDev) {
      return this.restcs.get('./assets/mock/progressNote.json');
    } else {
      //api url to be pasted here instead of mock json url
      return this.restcs.get('./assets/mock/progressNote.json');
    }
  }
}
