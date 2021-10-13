import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-worker-profile',
  templateUrl: './case-worker-profile.component.html',
  styleUrls: ['./case-worker-profile.component.scss']
})
export class CaseWorkerProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('case worker profile component');
  }

}
