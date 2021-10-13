import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states } from '../../app.constants';
import { VeteranprofileService } from '../../services/veteranprofile.service';

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
  submitted: boolean = false;
  states: State[];
  selectedState!: State;
  veteran: any;
  selectedGender: any = null;
  selectedMartialStatus: any = null;
  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };
  genders: any[] = [
    { name: 'Female', key: 'A' },
    { name: 'Male', key: 'M' },
  ];
  martialStatuses: any[] = [
    { name: 'Single', key: 'S' },
    { name: 'Married', key: 'M' },
  ];

  recordNo: any;
  userName: any;
  intakeDOB: any;
  caseManager: any;
  veteranId: any;
  firstName: any;
  middleName: any;
  lastName: any;
  nickName: any;
  dob: any;
  pob: any;
  emailId: any;
  phoneNumber: any;
  contactPersonFirstName: any;
  contactPersonMiddleName: any;
  contactPersonLastName: any;
  address1: any;
  address2: any;
  country: any;
  city: any;
  state: any;
  gender: any;
  zipCode: any;
  martialStatus: any;
  ssnNumber: any;
  hmisIdNo: any;
  primaryLanguage: any;
  relegiousPreferences: any;
  hobbies: any;
  contactPersonCity: any;
  contactPersonState: any;
  contactPersonZip: any;
  contactPersonHouseNumber: any;
  contactPersonRelationship: any;
  race: any;
  name: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.states = states;
  }

  ngOnInit(): void {
    console.log(this.name);
    this.selectedGender = this.genders[1];
    this.selectedMartialStatus = this.martialStatuses[1];

    this.service.getVeteranProfileDetailsByRecordNumber().subscribe((data) => {
    
      this.veteran = data;
      this.recordNo = this.veteran.recordNo;
      this.userName = this.veteran.firstName;
      this.dob = this.veteran.dob;
      this.intakeDOB = this.veteran.intakeDOB;
      this.userName = this.veteran.firstName;
      this.caseManager = this.veteran.caseManager;
      this.veteranId = this.veteran.veteranId;
      this.firstName = this.veteran.firstName;
      this.middleName = this.veteran.middleName;
      this.lastName = this.veteran.lastName;
      this.nickName = this.veteran.nickName;
      this.dob = this.veteran.dob;
      this.pob = this.veteran.pob;
      this.emailId = this.veteran.emailId;
      this.phoneNumber = this.veteran.phoneNumber;
      this.contactPersonFirstName = this.veteran.contactPersonFirstName;
      this.contactPersonMiddleName = this.veteran.contactPersonMiddleName;
      this.contactPersonLastName = this.veteran.contactPersonLastName;
      this.address1 = this.veteran.address1;
      this.address2 = this.veteran.address1;
      this.country = this.veteran.country;
      this.city = this.veteran.city;
      this.state = this.veteran.state;
      this.gender = this.veteran.gender;
      this.zipCode = this.veteran.zipCode;
      this.martialStatus = this.veteran.martialStatus;
      this.ssnNumber = this.veteran.ssnNumber;
      this.hmisIdNo = this.veteran.hmisIdNo;
      this.primaryLanguage = this.veteran.primaryLanguage;
      this.relegiousPreferences = this.veteran.relegiousPreferences;
      this.hobbies = this.veteran.hobbies;
      this.contactPersonCity = this.veteran.contactPersonCity;
      this.contactPersonState = this.veteran.contactPersonState;
      this.contactPersonZip = this.veteran.contactPersonZip;
      this.contactPersonHouseNumber = this.veteran.contactPersonHouseNumber;
      this.contactPersonRelationship = this.veteran.contactPersonRelationship;
      this.race = this.veteran.race;
      this.buildForm();
      console.log(this.veteranProfileForm.value);
      console.log(this.recordNo);
    });
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo:[this.recordNo],
      intakeDOB: [this.intakeDOB,Validators.required],
      caseManager: [this.caseManager, Validators.required],
      veteranId: [this.veteranId, Validators.required],
      firstName: [
        this.userName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.nullValidator,
        ],
      ],
      middleName: [this.middleName],
      lastName: [this.lastName, [Validators.required, Validators.minLength(4)]],
      nickName: [this.nickName, Validators.required],
      DOB: [this.dob, Validators.required],
      POB: [this.pob, Validators.required],

      emailId: [
        this.emailId,
        [Validators.required,
        Validators.pattern('/^[a-z]+[a-z0-9._]+@[a-z]+/.[a-z.]{2,5}$/'),
      ]],
      phoneNumber: [this.phoneNumber],

      cfirstName: [
        this.contactPersonFirstName,
       [Validators.required,
        Validators.minLength(4)]
      ],
      cmiddleName: [this.contactPersonMiddleName],
      clastName: [
        this.contactPersonLastName,
        [Validators.required,
        Validators.minLength(4)]
      ],

      address1: [this.address1, Validators.required],
      city: [this.city, Validators.required],
      selectedState: [this.state, Validators.required],
      country: [this.country, Validators.required],
      address2: [this.address2, Validators.required],
      zipCode: [this.zipCode, Validators.required],

      selectedGender: [this.gender, Validators.required],
      selectedMartialStatus: [this.martialStatus, Validators.required],

      SSNNumber: [this.ssnNumber],
      hmisIdNo: [this.hmisIdNo, Validators.required],

      primaryLanguage: [this.primaryLanguage, Validators.required],
      relegiousPreferences: [this.relegiousPreferences, Validators.required],
      hobbies: [this.hobbies, Validators.required],

      cCity: [this.contactPersonCity, Validators.required],
      cState: [this.contactPersonState, Validators.required],
      cZip: [this.contactPersonZip],
      cHouseNumber: [this.contactPersonHouseNumber, Validators.required],
      race: [this.race, Validators.required],
      contactPersonRelationship: [
        this.contactPersonRelationship,
        Validators.required,
      ],
    });
  }

  get emailid() {
    return this.veteranProfileForm.get('emailId');
  }
  get getControl() {
    return this.veteranProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.response);
    console.log(this.veteranProfileForm.value);
  }
}