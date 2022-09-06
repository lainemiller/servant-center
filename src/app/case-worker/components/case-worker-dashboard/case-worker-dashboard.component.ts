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
  public partic: string = "";
  public eventParticipants: string = "";
  public isAppointment: boolean = true;
  public caseWorkerId: number | undefined;
  
  constructor(
    private service: CalendarEventsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    console.log('case worker dashboard component');
    this.minDateValue = new Date(new Date().getTime());
    this.items = [
      { label: 'Appointment', icon: 'pi pi-fw pi-calendar' },
      { label: 'Event', icon: 'pi pi-fw pi-pencil' },
    ];
    this.caseWorkerId = 3;
    this.service.getCalendarEvents(this.caseWorkerId).subscribe((data: CalendarResp) => {
      this.totalEvents = data;
      console.log(this.totalEvents);
      this.getCaseWorkerEventData(data);
    });
    
    this.builtForm();
  }

  getCaseWorkerEventData(data: any) {
    this.totalEvents = data;
    for (let i = 0; i < this.totalEvents.data.length; i++) {
    let eventDate = this.totalEvents.data[i].eventstart.substring(0, 10);
    this.totalEvents.data[i]['date'] =  eventDate;
    }
   this.calendarOptions.events =  this.totalEvents.data;
  }
  public builtForm() {
    this.eventsForm = this.formBuilder.group({
      eventTitle: ['', Validators.required],
      // eventDate: ['', Validators.required],
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

  addParticipant() {
    this.count = this.count + 1;    
    if(this.count <= 20){
      const participantsFormArray = this.participants;
      participantsFormArray.push(this.getParticipantsDetailFormGroup());
    }else{
      this.participantsExceeded = true;
    }  
  }

  removeParticipant(index: number) {
    this.count -= 1;
    const participantsFormArray = this.participants;
    participantsFormArray.removeAt(index);
    //if(this.count <= 20){
      this.participantsExceeded = false;
    //}
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
    //events: './assets/mock/calendarEvents.json',
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
    for(let i=0;i<event.participants.length;i++){
      this.eventParticipants +=event.participants[i].name + ',';            
    }    
    let newEvent = {
      case_worker_id:4,
      isAppointment:this.isAppointment,
      title: event.eventTitle,
      description: event.eventDescription,
      sTime: event.startTime,
      enTime: event.endTime,
      participants: this.eventParticipants,
    };
    
    //sending calendar events/appointments to backend database
    this.service.postCalendarEvents(newEvent).subscribe(data =>{
      console.log('successfully posted event to backend');
    })
    // this.eventList.push(newEvent);
    console.log(this.eventList);
    this.calendarOptions.events = this.eventList;
    console.log(this.calendarOptions.events);
    this.display = false;
  }
  onCancel() {
    this.count = 0;
    this.eventsForm.reset();
    let participantsArray=this.eventsForm.get(['participants']) as FormArray
    this.clearFormArray(participantsArray)
    this.display = false;
  }
  changeTag(value: any) {
    this.tagName = value.activeItem.label;
    if(this.tagName === 'Appointment'){
      this.isAppointment = true;
    }else if(this.tagName === 'Event'){
      this.isAppointment = false;
    }
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }
  
  crossButton() {
    this.count = 0;
    this.eventsForm.reset();
    let participantsArray=this.eventsForm.get(['participants']) as FormArray
    this.clearFormArray(participantsArray)
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
