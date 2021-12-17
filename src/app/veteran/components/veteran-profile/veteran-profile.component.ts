import { Component, Input, OnInit } from '@angular/core';
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

// things: Thing[];
// input: String;

// id: number;
// name: string;

// things = [
//   {id: 20, name: 'First'},
//   {id: 45, name: 'Second'},
//   {id: 22, name: 'Third'},
//   {id: 67, name: 'Fourth'},
//   {id: 88, name: 'Fifth'}
// ];

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss'],
})
export class VeteranProfileComponent implements OnInit {
//   things: Thing[];
  //   things: Thing[];
  
  public stateValue : any;
  public profileDetails : any ;
  public genderArray : any = [];
  public veteranProfileForm!: FormGroup;
  public veteran : any;
  public submitted: boolean = false;
  public image : any;
  public states!: State[];
  input!: String;
  public relegions!: Relegion[];
  public languages!: Language[];
  public maritalStatus!: Status[];
  public relations!: Relation[];
  public races!: Race[];
  public selectedState!: State;
  public selectedLanguage!: Language;
  public selectedGender: any = null;
  public selectedMaritalStatus!: Status;
  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };
  public genders!: Gender[];
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
  maxDateValue! : Date;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {

    this.setForm();

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
    // console.log(this.name);
    this.selectedState = this.states[1];
    this.selectedGender = this.genders[1];
    this.selectedMaritalStatus = this.maritalStatus[1];
    this.selectedRelationship = this.relations[1];
    this.selectedRace = this.races[1];
    this.setForm();
    console.log("Check Profile",this.veteran);
  }

  setForm() {
    this.service.getProfileData().subscribe((data) => {
      console.log(data);
    
    // this.service.getVeteranProfileDetailsByRecordNumber().subscribe((data) => {
      // this.veteran = data;

      
      this.profileDetails = data;
      this.veteran = this.profileDetails.result[0];
      console.log("Check Profile",this.veteran);
      // this.genderArray = this.veteran.gender;
      this.buildForm();
      
      console.log(this.veteran.city);
      // this.veteranProfileForm.get('races')?.setValue(this.veteran.race);
      // this.veteranProfileForm.updateValueAndValidity();
      this.veteranProfileForm.patchValue({
        veteranId : this.profileDetails.vetID,
        intakeDOB: this.veteran.intakeDOB,
        recordNo : this.veteran.recordNo,
        caseManager : this.veteran.caseManager,
        firstName : this.veteran.firstName,
        middleName : this.veteran.middleName,
        lastName : this.veteran.lastName,
        nickName : this.veteran.nick_name,
        DOB : this.veteran.dob,
        POB : this.veteran.pob,
        SSNNumber : this.veteran.ssnNumber,
        hmisIdNo : this.veteran.hmisIdNo,
        gender : this.veteran.gender,
        selectedState : this.veteran.stateValue,
        mStatus : this.veteran.marital_status,
        emailId : this.veteran.emailId,
        phoneNumber : this.veteran.primary_phone,
        address1 :  this.veteran.address_main,
        city : this.veteran.city,
        // selectedState : this.veteran.state,
        country : this.veteran.county,
        address2 : this.profileDetails.address_line_2,
        zipCode : this.veteran.zip_code,
        hobbies : this.veteran.hobbies,
        primaryLanguage : this.veteran.primaryLanguage,
        relegiousPreferences: this.veteran.relegiousPreferences,
        selectedRace :  this.veteran.race,
        cfirstName : this.veteran.contact_person,
        cmiddleName: this.veteran.contactPersonMiddleName,
        clastName:  this.veteran.contactPersonLastName,
        selectedRelationship: this.veteran.contact_person_relationship,

        cPhoneNumber : this.veteran.contact_person_phone,
        cHouseNumber: this.veteran.contact_person_address,

        
        relegions  : this.veteran.relegions,
        genders : this.veteran.genders,
        maritalStatus : this.veteran.statuses,
        relations : this.veteran.relations,
        // races : this.veteran.race,
        maxDateValue : new Date(new Date().getTime()),

    // this.relegions = relegions;
    // this.languages = languages;
    // this.genders = genders;
    // this.maritalStatus = statuses;
    // // this.relations = [{ name: 'Mother' }, { name: 'Father' }, { name: 'Wife' }];
    //  this.relations = relations;
    // this.races = races;
    // this.maxDateValue = new Date(new Date().getTime());

        // firstName: this.veteran.fname,
        // lastName: this.veteran.lname,
        // recordNo: this.veteran.recNo,
        // dateOfBirth1: this.veteran.dob1,
        // intakeDOB: this.veteran.intakeDate,
        // hmisIdNo: this.veteran.hmisId,
      });
      console.log(this.veteranProfileForm.value);
    });
  }



  //   this.service.getVeteranProfileDetailsByRecordNumber().subscribe((data) => {
  //     this.veteran = data;
  //     this.recordNo = this.veteran.recordNo;
  //     this.caseManager = this.veteran.caseManager;
  //     this.intakeDOB = this.veteran.intakeDOB;
  //     this.veteranId = this.veteran.veteranId;
  //     this.firstName = this.veteran.firstName;
  //     console.log(this.firstName);
  //     this.middleName = this.veteran.middleName;
  //     this.lastName = this.veteran.lastName;
  //     this.nickName = this.veteran.nickName;
  //     this.dob = this.veteran.dob;
  //     this.pob = this.veteran.pob;
  //     this.emailId = this.veteran.emailId;
  //     this.phoneNumber = this.veteran.phoneNumber;
  //     this.cfirstName = this.veteran.contactPersonFirstName;
  //     this.contactPersonMiddleName = this.veteran.contactPersonMiddleName;
  //     this.contactPersonLastName = this.veteran.contactPersonLastName;
  //     this.address1 = this.veteran.address1;
  //     console.log(this.address1);
  //     this.address2 = this.veteran.address2;
  //     console.log(this.address2);
  //     this.country = this.veteran.country;
  //     this.city = this.veteran.city;
  //     this.zipCode = this.veteran.zipCode;
  //     this.ssnNumber = this.veteran.ssnNumber;
  //     this.hmisIdNo = this.veteran.hmisIdNo;
  //     this.relegiousPreferences = this.veteran.relegiousPreferences;
  //     this.hobbies = this.veteran.hobbies;
  //     this.contactPersonStreetName = this.veteran.contactPersonStreetName;
  //     this.contactPersonCity = this.veteran.contactPersonCity;
  //     this.contactPersonState = this.veteran.contactPersonState;
  //     this.contactPersonZip = this.veteran.contactPersonZip;
  //     this.contactPersonHouseNumber = this.veteran.contactPersonHouseNumber;
  //     this.contactPersonPhoneNumber = this.veteran.contactPersonPhoneNumber;
  //     this.contactPersonZip = this.contactPersonZip;
  //     this.buildForm();
  //   });
  // }
  // buildForm() {
  //   this.treatmentPlanForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     recordNo: ['', Validators.required],
  //     dateOfBirth1: [null, Validators.required],
  //     dateOfBirth2: [null, Validators.required],
  //     intakeDOB: [null, Validators.required],
  //     hmisIdNo: ['', Validators.required],
  //     veteranDiagnosis: ['', Validators.required],
  //     veteranSupports: ['', Validators.required],
  //     veteranStrengths: ['', Validators.required],
  //     treatmentIssues: this.initializeIssuesFormArray(),
  //     veteranNotes: ['', Validators.required],
  //   });


  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({

      recordNo: ['', Validators.required],
      intakeDOB: ['', Validators.required],
      caseManager: ['', Validators.required],
      veteranId: [''],
      firstName: [
        '',
        [
          Validators.required
        ],
      ],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nickName: ['', [Validators.required]],
      DOB: ['', Validators.required],
      POB: ['', [Validators.required]],

      emailId: [ '', [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]],

      phoneNumber: ['', Validators.required],

      cfirstName: [
        '',
        [Validators.required],
      ],
      cmiddleName: [
        '',
        [Validators.required,
        Validators.minLength(3)]
      ],
      clastName: ['', [Validators.required]],
 
      hobbies : ['', [Validators.required]],
      address1: ['', [Validators.required]],
      city: ['', [Validators.required]],
      selectedState: ['', Validators.required],
      selectedRelationship: [
        '',
        Validators.required,
      ],
      country: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.minLength(5)]],

      selectedGenders: ['', Validators.required],
      selectedMaritalStatus: ['', Validators.required],
      SSNNumber: [
        '',
        [Validators.required, Validators.minLength(11)],
      ],
      hmisIdNo: ['', [Validators.required, Validators.minLength(9)]],

      selectedRace: ['', Validators.required],
      selectedprimaryLanguage: ['', Validators.required],
      selectedRelegion: ['', Validators.required],


      cStreet: ['', Validators.required],
      cCity: ['', Validators.required],
      cState: ['', [Validators.required]],
      
      cHouseNumber: [
        '',
        [Validators.required],
      ],
      cPhoneNumber: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
      cZip: [
        '',
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
