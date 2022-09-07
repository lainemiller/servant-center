import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-one',
  templateUrl: './ia-form-page-one.component.html',
  styleUrls: ['./ia-form-page-one.component.scss'],
})
export class IaFormPageOneComponent implements OnInit {
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
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];
  maritalStatusList = [
    { label: 'Married', value: 'married' },
    { label: 'Seperated', value: 'seperated' },
    { label: 'Divorced', value: 'divorced' },
    { label: 'Widowed', value: 'widowed' },
    { label: 'Single', value: 'single' },
    { label: 'Same Sex Relationship', value: 'sameSexRelationship' },
    { label: 'Living Together', value: 'livingTogether' },
  ];
  currentMaritalStatusList = [
    { label: 'Married', value: 'married' },
    { label: 'Seperated', value: 'seperated' },
    { label: 'Divorced', value: 'divorced' },
    { label: 'Widowed', value: 'widowed' },
    { label: 'Single', value: 'single' },
    { label: 'Same Sex Relationship', value: 'sameSexRelationship' },
    { label: 'Living Together', value: 'livingTogether' },
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
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initializeFormGroups();
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
      //currentMaritalStatus: ['', Validators.required],
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
    this.buildForm();
  }

  buildForm() {
    this.page1Form = this.fb.group({
      personalDetails: this.personalDetails,
      incomeAndResources: this.incomeAndResources,
      benefits: this.benefits,
      socialAndFamilyHistory: this.socialAndFamilyHistory,
    });
  }

  onSubmit() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-2'
    );
    console.log('page 1 values', this.page1Form.value);
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
