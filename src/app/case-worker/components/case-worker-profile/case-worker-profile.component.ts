import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-worker-profile',
  templateUrl: './case-worker-profile.component.html',
  styleUrls: ['./case-worker-profile.component.scss'],
})
export class CaseWorkerProfileComponent implements OnInit {
  // to hide few fields in caseworker profile
  isShowFields: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
