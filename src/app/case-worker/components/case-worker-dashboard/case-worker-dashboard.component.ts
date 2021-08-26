import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-case-worker-dashboard',
  templateUrl: './case-worker-dashboard.component.html',
  styleUrls: ['./case-worker-dashboard.component.scss']
})
export class CaseWorkerDashboardComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev,next',
      center:'title',
      end: 'dayGridMonth,timeGridWeek,listWeek'
    },
    nowIndicator: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
