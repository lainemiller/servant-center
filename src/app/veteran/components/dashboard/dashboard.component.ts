import { Component, isDevMode, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressNotesService } from '../../services/progress-notes.service';
import { CalendarResp } from 'src/app/shared/models/calendarEventsResponse';
import { CalendarServiceService } from '../../services/calendar-service.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
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
  public tagName: string = 'Appointment';
  public isShowSpinner: boolean = true;
  public showGrayOut: boolean = true;
  private isDev = isDevMode();
  public startDateToDisplay: any;
  public endDateToDisplay: any;

  constructor(
    private service: CalendarServiceService,
    private cache: ClipBoardService
  ) {}

  ngOnInit(): void {
    //to get all the events of logged in veteran
    this.veteranId = this.cache.get('veteranId');
    console.log('this.veteranId', this.veteranId);
    this.service
      .getVeteranEvents(this.veteranId)
      .subscribe((eventData: any) => {
        if (eventData) {
          this.isShowSpinner = false;
          this.showGrayOut = false;
        }
        console.log('veteran event data id', eventData);
        this.getVeteranEventData(eventData);
      });
  }

  getVeteranEventData(eventData: any) {
    this.totalEvents = eventData;
    let parti = this.totalEvents.data;
    for (let i = 0; i < this.totalEvents.data.length; i++) {
      let eventDate = this.totalEvents.data[i].eventstart.substring(0, 10);
      this.totalEvents.data[i]['date'] = eventDate;
      this.allEvents.push(this.totalEvents.data[i]);
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
    validRange: {
      start: new Date().getFullYear() + '-01-01',
      end: new Date().getFullYear() + '-12-31',
    },
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
    if (arg.event._def.extendedProps.isappointment) {
      this.tagName = 'Appointment';
    } else {
      this.tagName = 'Event';
    }

    
    if(this.isDev){
      this.startDateToDisplay=arg.event._def.extendedProps.eventstart;
      this.endDateToDisplay= arg.event._def.extendedProps.eventend;
    }else{
      this.startDateToDisplay = new Date(arg.event._def.extendedProps.eventstart);
      console.log('old date', this.startDateToDisplay);
      this.startDateToDisplay.setTime(
        this.startDateToDisplay.getTime() - 5 * 60 * 60 * 1000 - 30 * 60 * 1000
      );
      console.log('new date', this.startDateToDisplay);
  
      this.endDateToDisplay = new Date(arg.event._def.extendedProps.eventend);
      console.log('old date', this.endDateToDisplay);
      this.endDateToDisplay.setTime(this.endDateToDisplay.getTime() - 5 * 60 * 60 * 1000 - 30 * 60 * 1000);
      console.log('new date', this.endDateToDisplay);

    }
    this.eventInfo = [
      this.tagName,
      this.startDateToDisplay,
       this.endDateToDisplay,
      arg.event._def.title,
      arg.event._instance.range.start,
      arg.event._def.extendedProps.description,
    ];
  }
}
