import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeteranprofileService } from 'src/app/veteran/services/veteranprofile.service';

import {
  genders,
  languages,
  relegions,
  states,
  races,
  statuses,
  relations,
} from '../../../veteran/app.constants';

interface DropDown {
  name: string;
}

@Component({
  selector: 'app-case-worker-profile',
  templateUrl: './case-worker-profile.component.html',
  styleUrls: ['./case-worker-profile.component.scss'],
})
export class CaseWorkerProfileComponent implements OnInit {
  public stateValue: any;
  public profileDetails: any;
  public genderArray: any = [];
  public caseWorkerProfileForm!: FormGroup;
  public veteran: any;
  public states!: DropDown[];
  public relegions!: DropDown[];
  public languages!: DropDown[];
  public maritalStatus!: DropDown[];
  public relations!: DropDown[];
  public races!: DropDown[];
  public selectedState!: DropDown;
  public selectedLanguage!: DropDown;
  public selectedGender: any = null;
  public selectedMaritalStatus!: DropDown;
  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };
  public genders!: DropDown[];
  public selectedRelationship: any;
  selectedRace: any;
  maxDateValue!: Date;

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
    this.relations = relations;
    this.races = races;
    this.maxDateValue = new Date(new Date().getTime());
  }
  ngOnInit(): void {
    this.selectedState = this.states[1];
    this.selectedGender = this.genders[1];
    this.selectedMaritalStatus = this.maritalStatus[1];
    this.selectedRelationship = this.relations[1];
    this.selectedRace = this.races[1];
    this.setForm();
    console.log('Check Profile', this.veteran);
  }

  setForm() {
    this.service.getProfileData().subscribe((data) => {
      this.profileDetails = data;
      this.veteran = this.profileDetails.result[0];
      console.log('Check Profile', this.veteran);
      this.buildForm();
      this.caseWorkerProfileForm.patchValue({
        firstName: this.veteran.firstName,
        middleName: this.veteran.middleName,
        lastName: this.veteran.lastName,
        nickName: this.veteran.nick_name,
        DOB: this.veteran.dob,
        POB: this.veteran.pob,
        SSNNumber: this.veteran.ssnNumber,
        hmisIdNo: this.veteran.hmisIdNo,
        gender: this.veteran.gender,
        selectedState: this.veteran.stateValue,
        mStatus: this.veteran.marital_status,
        emailId: this.veteran.emailId,
        phoneNumber: this.veteran.primary_phone,
        address1: this.veteran.address_main,
        city: this.veteran.city,
        country: this.veteran.county,
        address2: this.profileDetails.address_line_2,
        zipCode: this.veteran.zip_code,
        hobbies: this.veteran.hobbies,
        primaryLanguage: this.veteran.primaryLanguage,
        relegiousPreferences: this.veteran.relegiousPreferences,
        selectedRace: this.veteran.race,
        cfirstName: this.veteran.contact_person,
        selectedRelationship: this.veteran.contact_person_relationship,
        cPhoneNumber: this.veteran.contact_person_phone,
        cHouseNumber: this.veteran.contact_person_address,
        relegions: this.veteran.relegions,
        genders: this.veteran.genders,
        maritalStatus: this.veteran.statuses,
        relations: this.veteran.relations,
        maxDateValue: new Date(new Date().getTime()),
      });
      console.log(this.caseWorkerProfileForm.value);
    });
  }

  buildForm() {
    this.caseWorkerProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nickName: ['', [Validators.required]],
      DOB: ['', Validators.required],
      POB: ['', [Validators.required]],
      emailId: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$'
          ),
        ],
      ],
      phoneNumber: ['', Validators.required],
      cfirstName: ['', [Validators.required]],
      hobbies: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      city: ['', [Validators.required]],
      selectedState: ['', Validators.required],
      selectedRelationship: ['', Validators.required],
      country: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.minLength(5)]],
      selectedGenders: ['', Validators.required],
      selectedMaritalStatus: ['', Validators.required],
      SSNNumber: ['', [Validators.required]],
      hmisIdNo: ['', [Validators.required]],
      selectedRace: ['', Validators.required],
      selectedprimaryLanguage: ['', Validators.required],
      selectedRelegion: ['', Validators.required],
      cHouseNumber: ['', [Validators.required]],
      cPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }


  get getControl() {
    return this.caseWorkerProfileForm.controls;
  }

  onSubmit() {
    console.log(this.caseWorkerProfileForm.value);
  }

  resetForm() {
    this.buildForm();
    this.setForm();
  }
}
