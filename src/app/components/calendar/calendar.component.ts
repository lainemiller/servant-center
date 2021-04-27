import { Component, OnInit } from '@angular/core';
import { addDays, CalendarOptions } from '@fullcalendar/angular';
import {  } from "date-fns";
import { subBusinessDays } from 'date-fns/esm';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions1: CalendarOptions = {
    initialView: 'listWeek',
    dateClick: this.handleDateClick.bind(this),
    weekends: false,
    events: [
      {title: 'Meeting 1', date: subBusinessDays(new Date(), 1)},
      {title: '2 Meeting', date: new Date()},
      {title: '3 meeting', date: addDays(new Date(), 1)}
    ],
    height: 400
  }

  calendarOptions2: CalendarOptions = {
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this),
    weekends: false,
    events: [
      {title: 'Meeting 1', date: subBusinessDays(new Date(), 1)},
      {title: '2 Meeting', date: new Date()},
      {title: '3 meeting', date: addDays(new Date(), 1)}
    ],
    height: 400,
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '10:00',
      endTime: '18:00'
    }
  }

  calendarOptions3: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    weekends: false,
    events: [
      {title: 'Meeting 1', date: subBusinessDays(new Date(), 1)},
      {title: '2 Meeting', date: new Date()},
      {title: '3 meeting', date: addDays(new Date(), 1)}
    ],
    height: 600
  }



  ngOnInit(): void {
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendarOptions1.weekends = !this.calendarOptions1.weekends;
  }
}
