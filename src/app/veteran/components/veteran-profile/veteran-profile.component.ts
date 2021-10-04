import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VeteranprofileService } from '../../veteranprofile.service';

interface State {
  name: string;
}

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss'],
})
export class VeteranProfileComponent implements OnInit {
  veteranProfileForm!: FormGroup;
  states: State[];
  selectedState!: State;
  veteran: any;
  name: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.states = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' },
    ];
  }

  ngOnInit(): void {
    console.log(this.name);
    this.buildForm();
    let response = this.service.getVeteranProfileDetailsByRecordNumber();
    response.subscribe((data) => (this.veteran = data));
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo: ['', Validators.required],
      intakeDOB: [null, Validators.required],
      caseManager: [null, Validators.required],
      veteranId: [null, Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.required],
      veteranDiagnosis: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
      DOB: ['', Validators.required],
      POB: ['', Validators.required],
      SSNNumber: ['', Validators.required],
      hmisIdNo: ['', Validators.required],
      emailId: ['', Validators.required],
      veteranSupports: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.veteranProfileForm.value);
  }
}
