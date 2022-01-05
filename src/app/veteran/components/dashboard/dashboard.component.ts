import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

import { VeteranDashboardService } from '../../services/veteran-dashboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public displayEvent= false; 
  public eventsForm!: FormGroup;
  public eventTitle!:string;
  public eventDate!:string;
  public eventDes!:string;
  public eventStartTime!:string;
  public eventEndTime!:string;

  ngOnInit(): void {
    console.log('veteran dashboard component');
    this.items = [
      { label: 'Appointment', icon: 'pi pi-fw pi-calendar' },
      { label: 'Event', icon: 'pi pi-fw pi-pencil' },
    ];
    this.builtForm();
  }
  constructor(private formBuilder: FormBuilder) {}
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
    initialView: 'dayGridMonth',
    eventClick: this.showEventDetail.bind(this),
    headerToolbar: {
      start: 'prev,next',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek',
    },
    nowIndicator: true,
    editable: true,
    events:'./assets/mock/events.json'
  };
  addEvent() {
    this.display = true;
  }
  get getControl() {
    return this.eventsForm.controls;
  }
  onSubmit() {
    console.log(this.eventsForm.value);
    let event = this.eventsForm.value;
    let newEvent = { title: event.eventTitle, date: event.eventDate, description:event.eventDescription };
    this.eventList.push(newEvent);
    console.log(this.eventList);
    this.calendarOptions.events = this.eventList;
    console.log(this.calendarOptions.events);
    this.display = false;
  }
  onCancel() {
    this.eventsForm.reset();
    this.display = false;
  }
  changeTag(value: any) {
    console.log(value.activeItem.label);
    this.tagName = value.activeItem.label;
  }
  crossButton() {
    this.eventsForm.reset();
  }
  showEventDetail(arg: any) {
 this.displayEvent= true;
 console.log(arg);
 this.eventTitle= arg.event._def.title;
 this.eventDate= arg.event.start;
 this.eventDes =arg.event._def.extendedProps.description;
  }
}
