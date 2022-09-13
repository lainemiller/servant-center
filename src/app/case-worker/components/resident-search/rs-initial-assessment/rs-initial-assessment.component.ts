import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-rs-initial-assessment',
  templateUrl: './rs-initial-assessment.component.html',
  styleUrls: ['./rs-initial-assessment.component.scss'],
})
export class RsInitialAssessmentComponent {
  activeIndex : number = 0;

  steps: MenuItem[] = [
    { label: 'Step 1', routerLink: ['./page-1'], command: (event: any) => { this.activeIndex = 0; } },
    { label: 'Step 2', routerLink: ['./page-2'], command: (event: any) => { this.activeIndex = 1; } },
    { label: 'Step 3', routerLink: ['./page-3'], command: (event: any) => { this.activeIndex = 2; } },
    { label: 'Step 4', routerLink: ['./page-4'], command: (event: any) => { this.activeIndex = 3; } },
    { label: 'Step 5', routerLink: ['./page-5'], command: (event: any) => { this.activeIndex = 4; } },
  ];

  constructor() {}
}
