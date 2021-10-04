import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transportation-request-form',
  templateUrl: './transportation-request-form.component.html',
  styleUrls: ['./transportation-request-form.component.scss'],
})
export class TransportationRequestFormComponent implements OnInit {
  formTitle = 'TRANSPORTATION REQUEST FORM';
  transportRequestForm!: FormGroup;
  states: any[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.states = [
      { name: 'California', code: 'CA' },
      { name: 'Texas', code: 'TX' },
    ];
  }

  buildForm() {
    this.transportRequestForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      requestReason: ['', Validators.required],
      date: [null, Validators.required],
      time: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.transportRequestForm.value);
  }
}
