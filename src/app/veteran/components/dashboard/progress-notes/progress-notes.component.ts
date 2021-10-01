import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProgressNotesService } from 'src/app/veteran/services/progress-notes.service';

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
})
export class ProgressNotesComponent implements OnInit {
  title = 'PROGRESS NOTES';
  display = false;
  displayList = false;
  status: any;
  searchText = '';
  progressNote: any;
  d: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ProgressNotesService
  ) {}
  progressNotes: any;
  ngOnInit(): void {
    //get data from backend
    this.service.getNotes().subscribe((data) => {
      this.progressNotes = data;
    });
    this.buildForm();
    this.status = [
      { name: 'Open', code: true },
      { name: 'Close', code: false },
    ];

    // this.progressNotes = [
    //   {
    //     goalState: true,
    //     goalTitle: 'Goal Title 1',
    //     addedDate: '12/12/2020',
    //     goalDescription: `Lorem pravin dolor sit amet consectetur, adipisicing elit. Ab, earum.
    //                       Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
    //                       molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
    //   },
    //   {
    //     goalState: false,
    //     goalTitle: 'Goal Title 2',
    //     addedDate: '12/12/2020',
    //     goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
    //                       Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
    //                       molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
    //   },
    //   {
    //     goalState: false,
    //     goalTitle: 'csk',
    //     addedDate: '12/12/2020',
    //     goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
    //                       Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
    //                       molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
    //   },
    //   {
    //     goalState: false,
    //     goalTitle: 'csk',
    //     addedDate: '12/12/2020',
    //     goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
    //                       Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
    //                       molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
    //   },
    //   {
    //     goalState: false,
    //     goalTitle: 'rcb',
    //     addedDate: '3/12/2020',
    //     goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
    //                       Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
    //                       molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
    //   },
    // ];
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
      new Date().getMonth() + 1 + '/' + new Date().getUTCDate() + '/' + new Date().getFullYear();
      this.progressNote = this.formBuilder.group({
      goalTitle: ['', Validators.required],
      goalDescription: ['', Validators.required],
      goalState: ['true', Validators.required],
      addedDate: [this.d],
    });
  }
  onSubmit() {
    console.log(this.progressNote.value);
    //send data to backend
    this.service.postNotes(this.progressNote.value).subscribe((data) => {
      console.log('Submitted');
    });
    //get data from backend
    this.service.getNotes().subscribe((notes) => {
      console.log(notes);
    });
    // this.progressNotes.push(this.progressNote.value)
    this.display = false;
    console.log(this.progressNotes);
    this.progressNote.reset();
  }
}
