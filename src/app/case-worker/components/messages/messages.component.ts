import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  public requestObject: any;
  selectedResident: any;
  tableValues: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: TransportService
  ) {
    this.service.getTransportRequestFormData().subscribe((data) => {
      this.tableValues = data;
      console.log(this.tableValues);
      console.log(' i am table values');
    });
  }

  columns = [
    { field: 'firstName', header: 'firstName' },
    { field: 'lastName', header: 'lastName' },
    { field: 'address', header: 'address' },
  ];

  ngOnInit(): void {
    console.log('messages component');
  }

  selectResident(index: number) {
    this.selectedResident = this.tableValues[index];
    console.log(this.selectedResident);
  }
}
