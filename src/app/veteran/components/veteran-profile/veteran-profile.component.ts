import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { email, RxwebValidators } from '@rxweb/reactive-form-validators';
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
  submitted : boolean = false;
  states: State[];
  selectedState!: State;
  veteran: any;
  name: any;
  selectedGender: any = null;
  selectedMartialStatus: any = null;
  @email()
  emailId!: string;

  genders: any[] = [{ name: 'Female', key: 'A' }, { name: 'Male', key: 'M' }];
  martialStatuses: any[] = [{ name: 'Single', key: 'S' }, { name: 'Married', key: 'M' }];

  constructor(private formBuilder: FormBuilder, private service: VeteranprofileService) {

    this.states = [
      {name: 'Alabama'},
      {name: 'Alaska'},
      {name: 'Arizona'},
      {name: 'Arkansas'},
      {name: 'California'},
      {name: 'Colorado'},
      {name: 'Connecticut'},
      {name: 'Delaware'},
      {name: 'Florida'},
      {name: 'Georgia'},
      {name: 'Hawaii'},
      {name: 'Idaho'},
      {name: 'Illinois'},
      {name: 'Indiana'},
      {name: 'Iowa'},
      {name: 'Kansas'},
      {name: 'Kentucky'},
      {name: 'Louisiana'},
      {name: 'Maine'},
      {name: 'Maryland'},
      {name: 'Massachusetts'},
      {name: 'Michigan'},
      {name: 'Mississippi'},
      {name: 'Missouri'},
      {name: 'Montana'},
      {name: 'Nebraska'},
      {name: 'Nevada'},
      {name: 'New Hampshire'},
      {name: 'New Jersey'},
      {name: 'New Mexico'},
      {name: 'New York'},
      {name: 'North Carolina'},
      {name: 'North Dakota'},
      {name: 'Ohio'},
      {name: 'Oklahoma'},
      {name: 'Oregon'},
      {name: 'Pennsylvania'},
      {name: 'Rhode Island'},
      {name: 'South Carolina'},
      {name: 'South Dakota'},
      {name: 'Tennessee'},
      {name: 'Texas'},
      {name: 'Utah'},
      {name: 'Vermont'},
      {name: 'Virginia'},
      {name: 'Washington'},
      {name: 'West Virginia'},
      {name: 'Wisconsin'},
      {name: 'Wyoming'},
    ];
  }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.name);
    this.selectedGender = this.genders[1];
    this.selectedMartialStatus = this.martialStatuses[1];
    let response = this.service.getVeteranProfileDetailsByRecordNumber();
    response.subscribe((data) => this.veteran = data)
    console.log(response);
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo: [''],
      intakeDOB: [null],
      caseManager: [null, Validators.required],
      country: [null, Validators.required],
      veteranId: ['', Validators.required],
      firstName: ['', Validators.required, Validators.minLength(4),Validators.nullValidator],
      middleName: [''],
      lastName: ['', Validators.required, Validators.minLength(4)],
      cfirstName: ['', Validators.required, Validators.minLength(4)],
      cmiddleName: [''],
      clastName: ['', Validators.required, Validators.minLength(4)],
      nickName: ['', Validators.required],
      veteranDiagnosis: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      selectedGender: ['', Validators.required],
      selectedMartialStatus: ['', Validators.required],
      zipCode: [null, Validators.required],
      DOB: ['', Validators.required],
      POB: ['', Validators.required],
      SSNNumber: ['', RxwebValidators.mask({ mask: '999-99-9999' })],
      hmisIdNo: ['', Validators.required],
      emailId: [null,Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      veteranSupports: ['', Validators.required],
      phoneNumber: ['', RxwebValidators.mask({ mask: '(999) 999-9999' })],
      primaryLanguage: ['', Validators.required],
      relegiousPreferences: ['', Validators.required],
      hobbies: ['', Validators.required],
      cStreet: ['', Validators.required],
      cCity: ['', Validators.required],
      cState: ['', Validators.required],
      cZip: ['', RxwebValidators.mask({ mask: '99999-9999' })],
      cHouseNumber: ['', Validators.required],
      race: ['', Validators.required],
      contactPersonRelationship: ['', Validators.required],
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