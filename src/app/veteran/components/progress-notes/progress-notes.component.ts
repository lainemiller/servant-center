import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
})
export class ProgressNotesComponent implements OnInit {
  title = 'PROGRESS NOTES';
  constructor() {}

  ngOnInit(): void {
    console.log('veteran progress notes component');
  }
}
