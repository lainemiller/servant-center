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
  genderList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];
  maritalStatusList = [
    { label: 'Single', value: 'single' },
    { label: 'Married', value: 'married' },
    { label: 'Divorced', value: 'divorced' },
    { label: 'Widowed', value: 'widowed' },
  ];
  familyStatusList = [
    { label: 'Living', value: 'living' },
    { label: 'Deceased', value: 'deceased' },
  ];
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initializeFormGroups();
  }
  initializeFormGroups() {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      dob: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      ssn: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      race: ['', Validators.required],
      primaryLanguage: ['', Validators.required],
      contactPerson: ['', Validators.required],
      relationship: ['', Validators.required],
      address: ['', Validators.required],
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
      maritalStatus: ['', Validators.required],
      numberOfMarriages:['', Validators.required],
      spouseOrSignificvantOther: ['', Validators.required],
      children: new FormArray([]),
      relationShpWithParentsAndSiblings: ['', Validators.required],
      physicalAbuse: ['', Validators.required],
      sexualAbuse: ['', Validators.required],
      healthProblemsInFamily: ['', Validators.required],
      religiousPreference: ['', Validators.required],
      hobbiesOrInterests: ['', Validators.required],
      strengthsAndTalents: ['', Validators.required],
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

  get children(){
    return this.page1Form.get([
      'socialAndFamilyHistory',
      'children',
    ]) as FormArray
  }
}
