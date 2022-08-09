import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressNotesService } from '../../services/progress-notes.service';
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

  constructor(
    private service: ProgressNotesService
  ) {}

  ngOnInit(): void {
    //to get all the events of logged in veteran
    this.service.getCalData().subscribe((data) => {
      this.eventList = data;
      this.calendarData = this.eventList.data;
    });
    // this.service.getCalData().subscribe((data) => {
    //   this.eventList = data;
    //   console.log('eventdata',data);
      
    //   this.calendarData = this.eventList.data;
    // });

    setTimeout(() => {
      this.calendarOptions.events = this.calendarData;
    }, 200);   
  }


  public calendarOptions: CalendarOptions = {
    customButtons: {
      myCustomButton: {
        text: 'Previous year',
        click: function() {
         //api call for getting previous year data 
        }
      }
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
  //  events:  []
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
