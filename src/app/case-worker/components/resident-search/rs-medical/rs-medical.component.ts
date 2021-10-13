import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-medical',
  templateUrl: './rs-medical.component.html',
  styleUrls: ['./rs-medical.component.scss']
})
export class RsMedicalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rs medical component');
  }

}
