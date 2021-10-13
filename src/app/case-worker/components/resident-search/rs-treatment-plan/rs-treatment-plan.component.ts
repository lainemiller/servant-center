import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-treatment-plan',
  templateUrl: './rs-treatment-plan.component.html',
  styleUrls: ['./rs-treatment-plan.component.scss']
})
export class RsTreatmentPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rs treatment plan component');
  }

}
