import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

import { VeteranDashboardService } from '../../services/veteran-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name: any;
  public date: any;
  public data: any;
  public image: any;

  constructor(private service: VeteranDashboardService) {
    this.service.getName().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.name = this.data.name;
      this.date = this.data.date;
      this.image = this.data.image;
    });
  }

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev,next,today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek',
    },
    nowIndicator: true,
  };
}
