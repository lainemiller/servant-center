import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev,next,today',
      center:'title',
      end: 'dayGridMonth,timeGridWeek,listWeek'
    },
    nowIndicator: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
