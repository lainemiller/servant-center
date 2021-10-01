import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { SelectItem } from 'primeng/api';

interface State {
  name: string
}

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss']
})

export class VeteranProfileComponent implements OnInit {
  veteranProfileForm : FormGroup ;
  states: State[];
  selectedState: State;

  constructor(private formBuilder: FormBuilder) {
    
    this.states = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
  ];
   }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo : ['', Validators.required],
      intakeDOB: [null, Validators.required],
      caseManager : [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.required],
      veteranDiagnosis: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      zipCode: ['', Validators.required],
      DOB: ['', Validators.required],
      SSnnumber: ['', Validators.required],
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
