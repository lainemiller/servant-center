import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { progressNoteResponse } from 'src/app/shared/models/progressNotes_model';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { goalTypes } from '../../../app.constants';
import { ProgressNotesService } from 'src/app/veteran/services/progress-notes.service';
import { MessageService } from 'primeng/api';
import { Router } from "@angular/router";
interface DropDown {
  name: string;
  value: string;
}

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
  providers: [MessageService],
})
export class ProgressNotesComponent implements OnInit {
  [x: string]: any;
  public title = 'PROGRESS NOTES';
  public submitted = false;
  public display = false;
  public displayList = false;
  public status: any;
  public searchText = '';
  public progressNote: any;
  public d: any;
  public progressNotes: any = [];
  public progress: any = [];
  public initialStatus = false;
  public progressNotesState: any = [];
  public vetID: number;
  public goalTypes!: DropDown[];
  public goalId!: number;
  selectedType!: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ProgressNotesService,
    private cacheData: ClipBoardService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.vetID = this.cacheData.get('veteranId');
    this.goalTypes = goalTypes;
    this.sucessMessage();
  }

  ngOnInit(): void {
    //get data from backend

    this.service
      .getNotes(this.vetID)
      .subscribe((data: progressNoteResponse) => {
        this.progress = data;
        let k = 0;
        for (let i = this.progress.length; i > 0; i--) {
          this.progressNotes[k++] = this.progress[i - 1];
        }
        this.goalId = this.progressNote.goalId;
      });

    this.initialStatus = false;
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
    this.buildForm();
  }

  showList() {
    this.displayList = true;
  }

  buildForm() {
    let d =
      new Date().getMonth() +
      1 +
      '/' +
      new Date().getUTCDate() +
      '/' +
      new Date().getFullYear();
    this.progressNote = this.formBuilder.group({
      goalTitle: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+(.)*'),
          Validators.maxLength(50),
        ],
      ],
      goalType: ['', Validators.required],
      goalDescription: ['', [Validators.required, Validators.maxLength(300)]],
      goalState: [false, Validators.required],
      addedDate: [d],
     // goalID: ['', Validators.required],
    });
  }

  get progressNoteForm() {
    return this.progressNote.controls;
  }
  onSubmit() {
    let d =
      new Date().getMonth() +
      1 +
      '/' +
      new Date().getUTCDate() +
      '/' +
      new Date().getFullYear();
    console.log(this.progressNote.value);
    //send data to backend
    this.service
      .postNotes(this.vetID, this.progressNote.value)
      .subscribe((data) => {
        this.submitted = true;
        console.log('Submitted');
        console.log(this.progressNote.value);
        console.log('data data', data);
        if (data.responseStatus === 'SUCCESS') {
          console.log('successfully added new progress note');
          this.sucessMessage();
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
           this.router.navigate([currentUrl]);
        } else if (data.responseStatus === 'FAILUER') {
          this.someError();
        }
      });
    // get data from backend
    this.service
      .getNotes(this.vetID)
      .subscribe((notes: progressNoteResponse) => {
        console.log(notes);
      });
    this.progressNotes.push(this.progressNote.value);
  
    this.display = false;
    this.progressNote.reset();
    // window.location.reload();
  }
  crossButton() {
    this.initialStatus = true;
    this.progressNote.reset();
  }
  changed(goalId: number, goalState: boolean) {
    //TO UPDATE STATUS OF PROGRESS NOTE

    console.log('goal before passing status', goalState);
    
    this.progressNotesState = {
      goalId,
      goalState,
    };
    console.log('status changed for id', goalId, ' to', goalState);

    this.service
      .postStatus(this.vetID, this.progressNotesState)
      .subscribe((data) => {
        console.log('goal status after change', this.progressNotesState);
        console.log('data data', data);
        if (data.responseStatus === 'SUCCESS') {
          console.log('successfully saved the goal status');
          this.statusMessage();
        } else if (data.responseStatus === 'FAILUER') {
          this.someError();
        }
      });
  }
  cancleIt() {
    this.display = false;
    this.initialStatus = true;
    this.progressNote.reset();
  }

  sucessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'New Goal Added sucessfully',
    });
  }

  statusMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Goal Status Updated Successfully',
    });
    
  }

  someError(){
    this.messageService.add({
      severity: 'info',
      summary: 'Failed',
      detail: 'Something Went Wrong!',
    });
  }
}
