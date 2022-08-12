import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarResp } from 'src/app/shared/models/calendarEventsResponse';
import { CalendarEventsService } from '../../services/calendar-events.service';

@Component({
  selector: 'app-case-worker-dashboard',
  templateUrl: './case-worker-dashboard.component.html',
  styleUrls: ['./case-worker-dashboard.component.scss'],
})
export class CaseWorkerDashboardComponent implements OnInit {
  public items: any;
  public display = false;
  public eventList: any = [];
  public totalEvents: any = [];
  public tagName = 'Appointment';
  public eventsForm!: FormGroup;
  public displayEvent = false;
  public eventInfo: any = [];
  public minDateValue: any;
  public count = 0;
  public participantsExceeded: boolean = false;
  constructor(
    private service: CalendarEventsService,
    private formBuilder: FormBuilder
  ) {
    this.service.getEvents().subscribe((data: CalendarResp) => {
      this.totalEvents = data;
      console.log(this.totalEvents);
      this.eventList = this.totalEvents;
    });
  }

  ngOnInit(): void {
    console.log('case worker dashboard component');
    this.minDateValue = new Date(new Date().getTime());
    this.items = [
      { label: 'Appointment', icon: 'pi pi-fw pi-calendar' },
      { label: 'Event', icon: 'pi pi-fw pi-pencil' },
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
      participants: new FormArray([]),
    });
  }

  getParticipantsDetailFormGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addparticipant() {
    this.count = this.count + 1;    
    if(this.count <= 20){
      const participantsFormArray = this.participants;
      participantsFormArray.push(this.getParticipantsDetailFormGroup());
    }else{
      this.participantsExceeded = true;
    }  
  }

  removeparticipant(index: number) {
    const participantsFormArray = this.participants;
    participantsFormArray.removeAt(index);
  }

  get participants() {
    return this.eventsForm.get(['participants']) as FormArray;
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.showEventDetail.bind(this),
    headerToolbar: {
      start: 'prev,next',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek',
    },
    nowIndicator: true,
    events: './assets/mock/calendarEvents.json',
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
    let newEvent = {
      title: event.eventTitle,
      date: event.eventDate,
      description: event.eventDescription,
      type: this.tagName,
      sTime: event.startTime,
      enTime: event.endTime,
      participants: event.participants,
    };
    // this.eventList.push(newEvent);
    console.log(this.eventList);
    this.calendarOptions.events = this.eventList;
    console.log(this.calendarOptions.events);
    this.display = false;
  }
  onCancel() {
    this.eventsForm.reset();
    let a=this.eventsForm.get(['participants']) as FormArray
    this.clearFormArray(a)
    this.display = false;
  }
  changeTag(value: any) {
    console.log(value.activeItem.label);
    this.tagName = value.activeItem.label;
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }
  crossButton() {
    this.eventsForm.reset();
    let a=this.eventsForm.get(['participants']) as FormArray
    this.clearFormArray(a)
  }
  showEventDetail(arg: any) {
    this.displayEvent = true;
    console.log(arg);

    this.eventInfo = [
      arg.event._def.extendedProps.type,
      arg.event._def.extendedProps.sTime,
      arg.event._def.extendedProps.enTime,
      arg.event._def.title,
      arg.event.start,
      arg.event._def.extendedProps.description,
    ];
  }
}
