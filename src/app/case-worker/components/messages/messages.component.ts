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
    { field: 'first_name', header: 'firstName' },
    { field: 'last_name', header: 'lastName' },
    { field: 'pick_up_address_main', header: 'address' },
  ];

  ngOnInit(): void {
    console.log('messages component');
  }

  selectResident(index: number) {
    this.selectedResident = this.tableValues[index];
    console.log("Data",this.selectedResident);
  }
}
