import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-weekly-progress-notes',
  templateUrl: './rs-weekly-progress-notes.component.html',
  styleUrls: ['./rs-weekly-progress-notes.component.scss']
})
export class RsWeeklyProgressNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rs weekly progress component');
  }

}
