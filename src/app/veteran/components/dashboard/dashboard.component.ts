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
  public items: any;
  public display = false;
  public tagName = 'Appointment';
  public displayEvent = false;
  public eventsForm!: FormGroup;
  public minDateValue: any;
  public eventInfo: any = [];
  public calendarData: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: ProgressNotesService
  ) {}

  ngOnInit(): void {
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

    this.minDateValue = new Date(new Date().getTime());

    //event option removed according to servent center issue tracker
    this.items = [
      { label: 'Appointment', icon: 'pi pi-fw pi-calendar' },
    ];
    this.builtForm();
  }
  
  public builtForm() {
    this.eventsForm = this.formBuilder.group({
      eventTitle: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventDescription: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
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
  addEvent() {
    this.display = true;
  }
 
  get getControl() {
    return this.eventsForm.controls;
  }
  onSubmit() {    
    let event = this.eventsForm.value;  
    console.log(event);
      
    let newEvent = {
      title: event.eventTitle,
      date: event.eventDate,
      Description: event.eventDescription,
      type: this.tagName,
      sTime: event.startTime,
      enTime: event.endTime,
    };    
    this.calendarData.push(newEvent);
    this.calendarOptions.events = this.calendarData;
    this.display = false;
  }
  onCancel() {
    this.eventsForm.reset();
    this.display = false;
  }
  // changeTag(value: any) {
  //   this.tagName = value.activeItem.label;
  //   // this.displayEventCalendar = this.tagName == 'Event' ? true : false;
  //   // if(this.tagName==='Event'){
  //   //   this.calendarOptions.events=[  { "title": "COVID-19 Awareness Event", "date": "2022-05-03","Description":"The respondents have adequate awareness for COVID‐19 outbreak and its preventive measures."},
  //   //   { "title": "Pet adopting Event", "date": "2022-05-04","Description":"Event details go here."},
  //   //   { "title": "Team-building Event", "date": "2022-05-05","Description":"Event details go here."},
  //   //   { "title": "Charity Event", "date": "2022-05-05","Description":"Event details go here."},]
  //   // }else{
  //   //   this.calendarOptions.events=[   { "title": "Resume Building Help", "date": "2022-05-08","Description":"Event details go here."},
  //   //   { "title": "Celebrating Veterans", "date": "2022-05-05","Description":"Event details go here."},
  //   //   { "title": "National Holiday", "date": "2022-05-15","Description":"Event details go here."},
  //   //   { "title": "Career Fair", "date": "2022-01-26","Description":"Event details go here."}]
  //   // }
  // }
  crossButton() {
    this.eventsForm.reset();
  }
  showEventDetail(arg: any) {
    this.displayEvent = true;  
    console.log(arg);
      
    this.eventInfo = [
      'Event',
      arg.event._instance.range.start,
      arg.event._instance.range.end,
      arg.event._def.extendedProps.summary,
      arg.event._instance.range.start,
      arg.event._def.extendedProps.description,
    ];
  }
}
