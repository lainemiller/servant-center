import { Component, isDevMode, OnInit } from '@angular/core';
import { ClipBoardService } from './shared/services/clip-board.service';
import { Auth } from '@aws-amplify/auth';
import { VeteranDashboardService } from './veteran/services/veteran-dashboard.service';
import { log } from 'console';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'servant-center';

  constructor() {}
}
