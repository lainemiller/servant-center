import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeteranprofileService } from 'src/app/veteran/services/veteranprofile.service';
import { Auth } from '@aws-amplify/auth';

import {
  genders,
  languages,
  relegions,
  states,
  races,
  statuses,
  relations,
} from '../../../veteran/app.constants';
import { VeteranProfileResponse } from '../../models/VeteranProfileResponse';
import { ClipBoardService } from '../../services/clip-board.service';

interface DropDown {
  name: string;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  public stateValue: any;
  public profileDetails: any;
  public genderArray: any = [];
  public profileForm!: FormGroup;
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
  @Input() isShowFields!: boolean;
  veteranId!: number;
  email!: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService,
    private cacheData: ClipBoardService
  ) {
    this.veteranId = this.cacheData.get('veteranId');
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
    this.buildForm();
    Auth.currentAuthenticatedUser().then((user) => {
      this.email = user.signInUserSession.idToken.payload.email;
    });
  }

  setForm() {
    this.service
      .getProfileData(this.veteranId)
      .subscribe((data: VeteranProfileResponse) => {
        this.profileDetails = data;
        this.veteran = this.profileDetails.data[0];
        console.log('Profile API Data--->', data);
        this.profileForm.patchValue({
          firstName: this.veteran.first_name,
          middleName: this.veteran.middle_initial,
          lastName: this.veteran.last_name,
          nickName: this.veteran.nick_name,
          DOB: new Date(this.veteran.date_of_birth),
          POB: this.veteran.place_of_birth,
          SSNNumber: this.veteran.ssn,
          hmisIdNo: this.veteran.hmis_id,
          selectedGenders: this.veteran.gender,
          selectedState: this.veteran.state,
          selectedMaritalStatus: this.veteran.marital_status,
          emailId: this.email,
          phoneNumber: this.veteran.primary_phone,
          address1: this.veteran.address_main,
          city: this.veteran.city,
          country: this.veteran.county,
          address2: this.veteran.address_line_2,
          zipCode: this.veteran.zip_code,
          hobbies: this.veteran.hobbies,
          selectedprimaryLanguage: this.veteran.primary_language,
          selectedRelegion: this.veteran.religious_preference,
          selectedRace: this.veteran.race,
          cfirstName: this.veteran.contact_person,
          selectedRelationship: this.veteran.contact_person_relationship,
          cPhoneNumber: this.veteran.contact_person_phone,
          cHouseNumber: this.veteran.contact_person_address,
          maxDateValue: new Date(new Date().getTime()),
        });
      });
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
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
    return this.profileForm.controls;
  }

  onSubmit() {
    console.log('Profile Form submitted value', this.profileForm.value);
    let profileDetails = this.profileForm.value;
    this.service
      .updateProfile(this.veteranId, profileDetails)
      .subscribe((response) => {
        console.log(response);
      });
  }

  resetForm() {
    this.buildForm();
    this.setForm();
  }
}
