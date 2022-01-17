import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeteranprofileService } from '../../../services/veteranprofile.service';
import { states } from '../../../app.constants';
import { VeteranProfileResponse } from 'src/app/shared/models/VeteranProfileResponse';

interface State {
  value: string;
}

@Component({
  selector: 'app-transportation-request-form',
  templateUrl: './transportation-request-form.component.html',
  styleUrls: ['./transportation-request-form.component.scss'],
})
export class TransportationRequestFormComponent implements OnInit {
  formTitle = 'TRANSPORTATION REQUEST FORM';

  transportRequestForm!: FormGroup;
  public state: any;
  public minDateValue: any;
  public veteranData: any;
  public firstName: any;
  public lastName: any;
  // public address1: any;
  // public city: any;
  // public zipcode: any;
  public data: any;
  public states: State[];
  // selectedState!: State;
  selectedState!: any;
  userId:number=7;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.minDateValue = new Date(new Date().getTime());
    this.states = states;
  }

  ngOnInit(): void {
    this.selectedState = this.states[1];

    this.service.getProfileData(this.userId).subscribe((data:VeteranProfileResponse) => {
      this.veteranData = data;
      this.firstName = this.veteranData.firstName;
      this.lastName = this.veteranData.lastName;
      // this.address1 = this.veteranData.address1;
      // this.city = this.veteranData.city;
      this.state = this.veteranData.state;
      // console.log(this.selectedState)
      // this.zipcode = this.veteranData.zipcode;

      this.buildForm();
      console.log(this.transportRequestForm.value);
    });
  }

  buildForm() {
    this.transportRequestForm = this.formBuilder.group({
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      reason: ['', Validators.required],
      appointmentDate: [null, Validators.required],
      time: ['', Validators.required],
      destinationAddress: ['', Validators.required],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      zipcode: ['', Validators.required],
      // selectedState1: [this.selectedState, Validators.required],
    });
  }

  get reason() {
    return this.transportRequestForm.get('reason');
  }
  get appointmentDate() {
    return this.transportRequestForm.get('appointmentDate');
  }
  get time() {
    return this.transportRequestForm.get('time');
  }
  get city() {
    return this.transportRequestForm.get('city');
  }

  get destinationAddress() {
    return this.transportRequestForm.get('destinationAddress');
  }

  get zipcode() {
    return this.transportRequestForm.get('zipcode');
  }

  get control() {
    return this.transportRequestForm.controls;
  }

  reset() {
    this.buildForm();
  }

  onSubmit(): void {
    console.log(this.transportRequestForm.value);
  }
}
