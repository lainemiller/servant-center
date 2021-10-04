import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cw-transport-request',
  templateUrl: './cw-transport-request.component.html',
  styleUrls: ['./cw-transport-request.component.scss'],
})
export class CwTransportRequestComponent implements OnInit {
  mobileMode = false;
  constructor(private fb: FormBuilder) {}
  transportRequestForm!: FormGroup;
  states = [
    { name: 'California', code: 'CA' },
    { name: 'Texas', code: 'TX' },
  ];

  @HostListener('window:resize')
  onWindowResize() {
    this.mobileMode = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.buildForm();
    this.onWindowResize();
  }

  buildForm() {
    this.transportRequestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      coordinator: ['', Validators.required],
      approvedDate: ['', Validators.required],
      nursingNotified: ['', Validators.required],
      by: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
}
