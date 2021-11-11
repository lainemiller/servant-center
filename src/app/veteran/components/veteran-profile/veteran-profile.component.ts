import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  genders,
  languages,
  relegions,
  states,
  races,
  statuses,
  relations,
} from '../../app.constants';

import { VeteranprofileService } from '../../services/veteranprofile.service';

interface State {
  name: string;
}

interface Relegion {
  name: string;
}

interface Race {
  name: string;
}

interface Language {
  name: string;
}

interface Gender {
  name: string;
}

interface Status {
  name: string;
}

interface Relation {
  name: string;
}

interface Race {
  name: string;
}

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss'],
})
export class VeteranProfileComponent implements OnInit {
  public veteranProfileForm!: FormGroup;
  public submitted: boolean = false;
  public image : any;
  public states: State[];
  public relegions: Relegion[];
  public languages: Language[];
  public maritalStatus: Status[];
  public relations!: Relation[];
  public races: Race[];
  public selectedState!: State;
  public selectedLanguage!: Language;
  public veteran: any;
  public selectedGender: any = null;
  public selectedMaritalStatus!: Status;
  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };
  public genders: Gender[];

  public recordNo: any;
  public userName: any;
  public intakeDOB: any;
  public caseManager: any;
  public veteranId: any;
  public firstName: any;
  public middleName: any;
  public lastName: any;
  public nickName: any;
  public dob: any;
  public pob: any;
  public race : any;
  public emailId: any;
  public phoneNumber: any;
  public cfirstName: any;
  public contactPersonMiddleName: any;
  public contactPersonLastName: any;
  public address1: any;
  public address2: any;
  public country: any;
  public city: any;
  public state: any;
  public language: any;
  public gender: any;
  public zipCode: any;
  public ssnNumber: any;
  public hmisIdNo: any;
  public primaryLanguage: any;
  public mStatus : any;
  public relegiousPreferences: any;
  public hobbies: any;
  public selectedRelationship: any;
  public contactPersonCity: any;

  contactPersonState: any;
  contactPersonZip: any;
  contactPersonPhoneNumber: any;
  contactPersonHouseNumber: any;
  contactPersonRelationship: any;
  selectedRace: any;
  contactPersonStreetName: any;
  name: any;
  maxDateValue: Date;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.states = states;
    this.relegions = relegions;
    this.languages = languages;
    this.genders = genders;
    this.maritalStatus = statuses;
    // this.relations = [{ name: 'Mother' }, { name: 'Father' }, { name: 'Wife' }];
     this.relations = relations;
    this.races = races;
    this.maxDateValue = new Date(new Date().getTime());
  }

  ngOnInit(): void {
    console.log(this.name);
    this.selectedState = this.states[1];
    this.selectedGender = this.genders[1];
    this.selectedMaritalStatus = this.maritalStatus[1];
    this.selectedRelationship = this.relations[1];
    this.selectedRace = this.races[1];

    this.service.getVeteranProfileDetailsByRecordNumber().subscribe((data) => {
      this.veteran = data;
      this.recordNo = this.veteran.recordNo;
      this.caseManager = this.veteran.caseManager;
      this.intakeDOB = this.veteran.intakeDOB;
      this.veteranId = this.veteran.veteranId;
      this.firstName = this.veteran.firstName;
      console.log(this.firstName);
      this.middleName = this.veteran.middleName;
      this.lastName = this.veteran.lastName;
      this.nickName = this.veteran.nickName;
      this.dob = this.veteran.dob;
      this.pob = this.veteran.pob;
      this.emailId = this.veteran.emailId;
      this.phoneNumber = this.veteran.phoneNumber;
      this.cfirstName = this.veteran.contactPersonFirstName;
      this.contactPersonMiddleName = this.veteran.contactPersonMiddleName;
      this.contactPersonLastName = this.veteran.contactPersonLastName;
      this.address1 = this.veteran.address1;
      console.log(this.address1);
      this.address2 = this.veteran.address2;
      console.log(this.address2);
      this.country = this.veteran.country;
      this.city = this.veteran.city;
      this.zipCode = this.veteran.zipCode;
      this.ssnNumber = this.veteran.ssnNumber;
      this.hmisIdNo = this.veteran.hmisIdNo;
      this.relegiousPreferences = this.veteran.relegiousPreferences;
      this.hobbies = this.veteran.hobbies;
      this.contactPersonStreetName = this.veteran.contactPersonStreetName;
      this.contactPersonCity = this.veteran.contactPersonCity;
      this.contactPersonState = this.veteran.contactPersonState;
      this.contactPersonZip = this.veteran.contactPersonZip;
      this.contactPersonHouseNumber = this.veteran.contactPersonHouseNumber;
      this.contactPersonPhoneNumber = this.veteran.contactPersonPhoneNumber;
      this.contactPersonZip = this.contactPersonZip;
      this.buildForm();
    });
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({

      recordNo: [this.recordNo],
      intakeDOB: [this.intakeDOB, Validators.required],
      caseManager: [this.caseManager, Validators.required],
      veteranId: [this.veteranId],
      firstName: [
        this.firstName,
        [
          Validators.required
        ],
      ],
      middleName: [this.middleName, [Validators.required]],
      lastName: [this.lastName, [Validators.required]],
      nickName: [this.nickName, [Validators.required]],
      DOB: [this.dob, Validators.required],
      POB: [this.pob, [Validators.required]],

      emailId: [ this.emailId, [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]],

      phoneNumber: [this.phoneNumber, Validators.required],

      cfirstName: [
        this.cfirstName,
        [Validators.required],
      ],
      cmiddleName: [
        this.contactPersonMiddleName,
        [Validators.required,
        Validators.minLength(3)]
      ],
      clastName: [this.contactPersonLastName, [Validators.required]],

      address1: [this.address1, [Validators.required]],
      city: [this.city, [Validators.required]],
      selectedState: [this.state, Validators.required],
      selectedRelationship: [
        this.contactPersonRelationship,
        Validators.required,
      ],
      country: [this.country, [Validators.required]],
      address2: [this.address2, [Validators.required]],
      zipCode: [this.zipCode, [Validators.required, Validators.minLength(5)]],

      selectedGenders: [this.gender, Validators.required],
      selectedMaritalStatus: [this.mStatus, Validators.required],
      SSNNumber: [
        this.ssnNumber,
        [Validators.required, Validators.minLength(11)],
      ],
      hmisIdNo: [this.hmisIdNo, [Validators.required, Validators.minLength(9)]],

      selectedRace: [this.race, Validators.required],
      selectedprimaryLanguage: [this.language, Validators.required],
      selectedRelegion: [this.relegiousPreferences, Validators.required],
      hobbies: [this.hobbies],

      cStreet: [this.contactPersonStreetName, Validators.required],
      cCity: [this.contactPersonCity, Validators.required],
      cState: [this.contactPersonState, [Validators.required]],
      
      cHouseNumber: [
        this.contactPersonHouseNumber,
        [Validators.required],
      ],
      cPhoneNumber: [
        this.contactPersonPhoneNumber,
        [Validators.required, Validators.minLength(10)],
      ],
      cZip: [
        this.contactPersonZip,
        [Validators.required, Validators.minLength(4)],
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
    console.log(this.veteranProfileForm.value);
  }

  resetForm() {
    this.buildForm();
  }

}
