import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage1Service } from "src/app/case-worker/services/ia-page1.service";
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
@Component({
  selector: 'app-ia-form-page-one',
  templateUrl: './ia-form-page-one.component.html',
  styleUrls: ['./ia-form-page-one.component.scss'],
})
export class IaFormPageOneComponent implements OnInit {
  selecteVetId!: number;
  data: any;
  date_of_birth: any;
  submitted: boolean = false;
  page1Form!: FormGroup;
  personalDetails!: FormGroup;
  incomeAndResources!: FormGroup;
  benefits!: FormGroup;
  socialAndFamilyHistory!: FormGroup;
  everMarried = [{ label: 'Have you ever been Married?', key: 'married' }];
  sexuallyActive = [{ label: 'Are you currently sexually active?', key: 'sexuallyActive'}];
  sexualProblemsOrConcerns = [{ label: 'Do you have any sexual problems or concerns?', key: 'sexualProblemsOrConcerns'}];
  testedForHivOrAids = [{ label: 'Have you ever been tested for HIV/AIDS?', key: 'testedForHivOrAids'}];
  testedSTDs = [{ label: 'Have you ever been tested for STD \'s?', key: 'testedSTDs'}];
  hivTestDesired= [{label: 'If you answered no, would you like to be tested for HIV/AIDS or STD\'s', key: 'hivTestDesired'}];
  genderList = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Others', value: 'O' },
  ];
  maritalStatusList = [
    { label: 'Married', value: 'Married' },
    { label: 'Seperated', value: 'Seperated' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Widowed', value: 'Widowed' },
    { label: 'Single', value: 'Single' },
    { label: 'Same Sex Relationship', value: 'Same Sex Relationship' },
    { label: 'Living Together', value: 'Living Together' },
  ];

  familyStatusList = [
    { label: 'Living', value: 'living' },
    { label: 'Deceased', value: 'deceased' },
  ];
  sexualOrientation= [
    {label: 'Heterosexual', value: 'heterosexual'},
    {label: 'Homosexual', value: 'homosexual'},
    {label: 'Bisexual', value: 'bisexual'},
    {label: 'Transexual', value: 'transexual'},
    {label: 'Transgender', value: 'transgender'},
    {label: 'Other', value: 'other'},
  ];
  constructor(private fb: FormBuilder, private router: Router, private service: IaPage1Service, private datepipe: DatePipe, private cacheData: ClipBoardService) {
     this.selecteVetId = this.cacheData.get("selectedResidentVeteranId")
    console.log('sel', this.selecteVetId);
    this.setForm();
    
  }
  ngOnInit(): void {
    this.initializeFormGroups();
  }
    setForm(){
    
    this.service.getIAPage1(this.selecteVetId).subscribe((res) => {
      this.data = res[0];
      console.log('dob', this.data.date_of_birth);
      this.date_of_birth = this.datepipe.transform(this.data.date_of_birth, 'dd/MM/yyyy');
      this.buildForm();
      this.personalDetails.patchValue({
        firstName: this.data.first_name,
        lastName: this.data.last_name,
      middleInitial:         this.data.middle_initial,
      nickName:              this.data.nick_name,
      dob:                   this.date_of_birth,
      placeOfBirth:          this.data.place_of_birth,
      ssn:                   this.data.ssn,
    //  age:                   this.data.,
      sex:                   this.data.gender,
      maritalStatus:         this.data.marital_status,
      race:                  this.data.race,
      primaryPhone:          this.data.primary_phone,
      primaryLanguage:       this.data.primary_language,
      addressMain:           this.data.address_main,
      addressLine2:          this.data.address_line_2,
      city:                  this.data.city,
      country:               this.data.county,
      zipcode:               this.data.zip_code,
      contactPerson:         this.data.contact_person,
      relationship:          this.data.contact_person_relationship,
      contactPersonAddress:  this.data.contact_person_address,
      phone:  this.data.contact_person_phone
      });
      this.incomeAndResources.patchValue({
        income: this.data.income,
        type: this.data.income_type,
        bankAccount: this.data.bank_account_type,
        bankName: this.data.bank_name,
        directDeposit: this.data.direct_deposit,
        otherAssets: this.data.other_assets,
        medicaid: this.data.medicaid_coverage,
        vaCoverage: this.data.va_coverage,
        otherBenefits: this.data.otherBenefits,
        cashBenefits: this.data.cash_benefits,
        nonCashBenefits: this.data.non_cash_benefits
      });
      this.benefits.patchValue({
        receivingBenefits: this.data.current_benefits,
        applyingBenefits: this.data.needed_benefits
      })
      this.socialAndFamilyHistory.patchValue({
        childhood: this.data.childhood
      })
      console.log('daaaata',this.data.first_name);
      
  });
}

  initializeFormGroups() {
    this.personalDetails = this.fb.group({
      firstName: ['', Validators.required],
      middleInitial: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.required],
      dob: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      ssn: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      race: ['', Validators.required],
      primaryPhone: ['', Validators.required],
      primaryLanguage: ['', Validators.required],
      addressMain: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      contactPerson: ['', Validators.required],
      relationship: ['', Validators.required],
      contactPersonAddress: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.incomeAndResources = this.fb.group({
      income: ['', Validators.required],
      type: ['', Validators.required],
      bankAccount: ['', Validators.required],
      bankName: ['', Validators.required],
      directDeposit: ['', Validators.required],
      otherAssets: ['', Validators.required],
      medicaid: ['', Validators.required],
      vaCoverage: ['', Validators.required],
      otherBenefits: ['', Validators.required],
      cashBenefits: ['', Validators.required],
      nonCashBenefits:['', Validators.required],
    });
    this.benefits = this.fb.group({
      receivingBenefits: ['', Validators.required],
      applyingBenefits: ['', Validators.required],
    });
    this.socialAndFamilyHistory = this.fb.group({
      mothersFullName: ['', Validators.required],
      motherStatus: ['', Validators.required],
      fathersFullName: ['', Validators.required],
      fatherStatus: ['', Validators.required],
      siblings: new FormArray([]),
      married: ['', Validators.required],
      numberOfMarriages: ['', Validators.required],
      spouseOrSignificvantOther: ['', Validators.required],
      children: new FormArray([]),
      childhood: ['', Validators.required],
      relationShipWithParents: ['', Validators.required],
      relationShipWithSiblings: ['', Validators.required],
      discipline: ['', Validators.required],
      physicalAbuse: ['', Validators.required],
      sexualAbuse: ['', Validators.required],
      healthProblemsInFamily: ['', Validators.required],
      currentMaritalStatus: ['', Validators.required],
      sexualOrientation: ['', Validators.required],
      sexuallyActive: ['', Validators.required],
      sexualProblemsOrConcerns: ['', Validators.required],
      specifySexualProblems: ['', Validators.required],
      testedForHivOrAids: ['', Validators.required],
      hivTestedDate: ['', Validators.required],
      hivTestedLocation: ['', Validators.required],
      hivTestResult: ['', Validators.required],
      testedSTDs: ['', Validators.required],
      stdTestedDate: ['', Validators.required],
      stdTestedLocation: ['', Validators.required],
      stdTestResult: ['', Validators.required],
      hivTestDesired: ['', Validators.required],
    });
    // this.buildForm();
  }

  buildForm() {
    this.page1Form = this.fb.group({
      personalDetails: this.personalDetails,
      incomeAndResources: this.incomeAndResources,
      benefits: this.benefits,
      socialAndFamilyHistory: this.socialAndFamilyHistory,
    });
  }

  get iaPage1PD() {
    return this.personalDetails.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.service.initialTreatmentGoalsPage1( this.page1Form.value).subscribe((data) => {
      console.log('Submitted');
      
    });
    // this.router.navigateByUrl(
    //   'case-worker/resident-search/initial-assessment/page-2'
    // );
    console.log('page 1 values', this.page1Form.value);
  }
  next(){
    console.log('clicked next');
    if(this.submitted){
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-2'
    );
    }
    else{
      alert("Please save first")
    }
  }

  getFamilyDetailFormGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  addSibling() {
    const siblingsFormArray = this.siblings;
    siblingsFormArray.push(this.getFamilyDetailFormGroup());
  }

  removeSibling(index: number) {
    const siblingsFormArray = this.siblings;
    siblingsFormArray.removeAt(index);
  }

  get siblings() {
    return this.page1Form.get([
      'socialAndFamilyHistory',
      'siblings',
    ]) as FormArray;
  }

  addChildren() {
    const childrenFormArray = this.children;
    childrenFormArray.push(this.getFamilyDetailFormGroup());
  }

  removeChildren(index: number) {
    const childrenFormArray = this.children;
    childrenFormArray.removeAt(index);
  }

  get children() {
    return this.page1Form.get([
      'socialAndFamilyHistory',
      'children',
    ]) as FormArray;
  }
}
