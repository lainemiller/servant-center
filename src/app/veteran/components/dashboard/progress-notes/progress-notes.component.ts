import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProgressNotesService } from 'src/app/veteran/services/progress-notes.service';

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
})
export class ProgressNotesComponent implements OnInit {
  public title = 'PROGRESS NOTES';
  public display = false;
  public displayList = false;
  public status: any;
  public searchText = '';
  public progressNote: any;
  public d: any;
  public progressNotes: any;
  public initialStatus=false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProgressNotesService
  ) {}

  ngOnInit(): void {
    //get data from backend

    this.service.getNotes().subscribe((data) => {
      this.progressNotes = data;
    });

    this.buildForm();
  }
  
  
  expandOrCollapse(index: any) {
    const elementSelector = '#goal-desc--' + index;
    const descElement = document.querySelector(elementSelector) as HTMLElement;
    descElement.classList.contains('expand')
      ? descElement.classList.remove('expand')
      : descElement.classList.add('expand');
  }

  showDialog() {
    this.display = true;
  }

  showList() {
    this.displayList = true;
  }

  buildForm() {
    this.d =
      new Date().getMonth() +
      1 +
      '/' +
      new Date().getUTCDate() +
      '/' +
      new Date().getFullYear();
    this.progressNote = this.formBuilder.group({
      goalTitle: ['', Validators.required],
      goalDescription: ['', Validators.required],
      goalState: ['false', Validators.required],
      addedDate: [this.d],
    });
  }

  get goalTitle(){
    return this.progressNote.get('goalTitle');
  }
  get goalDescription(){
    return this.progressNote.get('goalDescription');
  }
  get goalState(){
    return this.progressNote.get('goalState');
  }
  onSubmit() {
    console.log(this.progressNote.value);
    //send data to backend
    // this.service.postNotes(this.progressNote.value).subscribe((data) => {
    //   console.log('Submitted');
    // });
    //get data from backend
    this.service.getNotes().subscribe((notes) => {
      console.log(notes);
    });
    // this.progressNotes.push(this.progressNote.value)
    this.display = false;
    console.log(this.progressNotes);
    this.progressNote.reset();
  }
  crossButton(){
    this.progressNote.reset();
  }
  cancleIt(){
    this.display = false;
    this.progressNote.reset();
  }
}
