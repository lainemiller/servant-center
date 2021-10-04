import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-rs-initial-assessment',
  templateUrl: './rs-initial-assessment.component.html',
  styleUrls: ['./rs-initial-assessment.component.scss'],
})
export class RsInitialAssessmentComponent implements OnInit {
  steps: MenuItem[] = [
    { label: 'Step 1', routerLink: ['./page-1'], skipLocationChange: true },
    { label: 'Step 2', routerLink: ['./page-2'], skipLocationChange: true },
    { label: 'Step 3', routerLink: ['./page-3'], skipLocationChange: true },
    { label: 'Step 4', routerLink: ['./page-4'], skipLocationChange: true },
    { label: 'Step 5', routerLink: ['./page-5'], skipLocationChange: true },
  ];
  constructor() {}

  ngOnInit(): void {}
}
