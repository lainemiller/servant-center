import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressNotesService } from '../../services/progress-notes.service';
import { CalendarResp } from 'src/app/shared/models/calendarEventsResponse';
import { CalendarServiceService } from '../../services/calendar-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public eventList: any = [];
  public displayEvent = false;
  public eventsForm!: FormGroup;
  public eventInfo: any = [];
  public calendarData: any = [];
  public veteranId: any;
  public totalEvents: any;
  public allEvents: any = [];
  constructor(private service: CalendarServiceService) {}

  ngOnInit(): void {
    //to get all the events of logged in veteran
    this.veteranId = 5;
    this.service.getCalendarEvents().subscribe((data: any) => {
      this.getVeteranEventData(data);
    });
  }

  getVeteranEventData(data: any) {
    this.totalEvents = data;
    let parti = this.totalEvents.data;
    for (let i = 0; i < this.totalEvents.data.length; i++) {
      let participantMails = parti[i].participants;
      if (participantMails.includes('pravin.bhilare@mindtree.com')) {
        let eventDate = this.totalEvents.data[i].eventstart.substring(0, 10);
        this.totalEvents.data[i]['date'] = eventDate;
        this.allEvents.push(this.totalEvents.data[i]);
      }
    }
      this.calendarOptions.events = this.allEvents;
  }
  public calendarOptions: CalendarOptions = {
    customButtons: {
      myCustomButton: {
        text: 'Previous year',
        click: function () {
          //api call for getting previous year data
        },
      },
    },
    initialView: 'dayGridMonth',
    eventClick: this.showEventDetail.bind(this),
    headerToolbar: {
      start: 'prev,next',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek',
    },
    nowIndicator: true,
    editable: true,
  };

  get getControl() {
    return this.eventsForm.controls;
  }

  showEventDetail(arg: any) {
    this.displayEvent = true;
    console.log(arg);

    this.eventInfo = [
      'Event',
      arg.event._instance.range.start,
      arg.event._instance.range.end,
      arg.event._def.title,
      arg.event._instance.range.start,
      arg.event._def.extendedProps.Description,
    ];
  }
}
