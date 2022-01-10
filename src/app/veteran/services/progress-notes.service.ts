import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  progressNoteResponse } from 'src/app/shared/models/progressNotes_model';

@Injectable({
  providedIn: 'root',
})

export class ProgressNotesService {
  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<progressNoteResponse>('./assets/mock/progressNote.json');
  }

  postNotes(note: any) {
    return this.http.post<any>('./assets/mock/progressNote.json', note);
  }
}
