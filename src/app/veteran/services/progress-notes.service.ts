import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressNotesService {

  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get("./assets/mock/progressNote.json");
  }

  postNotes(note:any){
    return this.http.post<any>("./assets/mock/progressNote.json",note);
  }
}
