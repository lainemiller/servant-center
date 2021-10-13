import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-dashboard',
  templateUrl: './sc-dashboard.component.html',
  styleUrls: ['./sc-dashboard.component.scss']
})
export class ScDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('sc dashboard component');
  }

}
