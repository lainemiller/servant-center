import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage2Service } from 'src/app/case-worker/services/ia-page2.service';

@Component({
  selector: 'app-ia-form-page-two',
  templateUrl: './ia-form-page-two.component.html',
  styleUrls: ['./ia-form-page-two.component.scss'],
})
export class IaFormPageTwoComponent implements OnInit {
  submitted!: boolean;
  page2Form!: FormGroup;
  educationAndEmploymentHistory!: FormGroup;
  socialHistory!: FormGroup;
  mentalHealthInformation!: FormGroup;
  military = [{ label: 'Military', key: 'military' }];
  needPsychiatricCunsultant = [
    { label: 'Need Psychiatrist Cunsultant', key: 'needPsychiatricCunsultant' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: IaPage2Service
  ) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.educationAndEmploymentHistory = this.fb.group({
      highestGradeCompleted: ['', Validators.required],
      nameAndLocation: ['', Validators.required],
      otherTrainingOrEducation: ['', Validators.required],
      occupationOrWorkSkill: ['', Validators.required],
      jobEmployedInLongest: ['', Validators.required],
      mostRecentJob: ['', Validators.required],
      jobDate: ['', Validators.required],
      reasonForLeaving: ['', Validators.required],
      military: ['', Validators.required],
      branch: ['', Validators.required],
      typeOfDischarge: ['', Validators.required],
      serviceDate: ['', Validators.required],
      serviceLocation: ['', Validators.required],
      otherTrainingEducation: ['', Validators.required],
      currentEmployer: ['', Validators.required],
      currentEmployerLocation: ['', Validators.required],
    });

    this.socialHistory = this.fb.group({
      religiousPreferences: ['', Validators.required],
      hobbiesInterests: ['', Validators.required],
    });
    this.mentalHealthInformation = this.fb.group({
      diagnoses: ['', Validators.required],
      currentPsychiatricTreatment: ['', Validators.required],
      psychiatristName: ['', Validators.required],
      psychiatristAddress: ['', Validators.required],
      pastTreatments: ['', Validators.required],
      needPsychiatricCunsultant: ['', Validators.required],
      dateScheduled: ['', Validators.required],
      psychEvaluatorName: ['', Validators.required],
      psychEvaluatorAddress: ['', Validators.required],
      psychEvaluatorCity: ['', Validators.required],
      psychEvaluatorState: ['', Validators.required],
      psychEvaluatorZipcode: ['', Validators.required],
      psychEvaluatorLicense: ['', Validators.required],
    });
    this.buildForm();
  }

  buildForm() {
    this.page2Form = this.fb.group({
      educationAndEmploymentHistory: this.educationAndEmploymentHistory,
      mentalHealthInformation: this.mentalHealthInformation,
      socialHistory: this.socialHistory,
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service
      .initialTreatmentGoalsPage2(this.page2Form.value)
      .subscribe((data) => {
        console.log('Submitted');
      });
    // this.router.navigateByUrl(
    //   'case-worker/resident-search/initial-assessment/page-3'
    // );
    console.log('page 2 values', this.page2Form.value);
  }
  next(){
    console.log('clicked next');
    if(this.submitted){
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-3'
    );
    }
    else{
      alert("Please save first")
    }
  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-1'
    );
  }

  index: number = 0;
}
