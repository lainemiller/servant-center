import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
})
export class ProgressNotesComponent implements OnInit {
  title = 'PROGRESS NOTES';
  constructor() {}
  progressNotes: any[] = [];
  ngOnInit(): void {
    this.progressNotes = [
      {
        goalState: true,
        goalTitle: 'Goal Title 1',
        addedDate: '12/12/2020',
        goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
                          Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
                          molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
      },
      {
        goalState: false,
        goalTitle: 'Goal Title 2',
        addedDate: '12/12/2020',
        goalDescription: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum.
                          Atque cum odit veniam illo in illum ducimus cupiditate nemo harum perferendis,
                          molestias, totam eligendi consectetur vel quasi perspiciatis ad!`,
      },
    ];
  }

  expandOrCollapse(index: any) {
    const elementSelector = '#goal-desc--' + index;
    const descElement = document.querySelector(elementSelector) as HTMLElement;
    descElement.classList.contains('expand') ? descElement.classList.remove('expand') : descElement.classList.add('expand');
  }
}
