import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-two',
  templateUrl: './ia-form-page-two.component.html',
  styleUrls: ['./ia-form-page-two.component.scss'],
})
export class IaFormPageTwoComponent implements OnInit {
  page2Form!: FormGroup;
  educationAndEmploymentHistory!: FormGroup;
  socialHistory!: FormGroup;
  mentalHealthInformation!: FormGroup;
  military = [{ label: 'Military', key: 'military' }];

  constructor(private fb: FormBuilder, private router: Router) {}

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
    });

    this.socialHistory = this.fb.group({
      religiousPreferences: ['', Validators.required],
      hobbiesInterests: ['', Validators.required],
    });
    this.mentalHealthInformation = this.fb.group({
      diagnoses: ['', Validators.required],
      currentMedications: ['', Validators.required],
      psychiatristOrTherapist: ['', Validators.required],
      clinic: ['', Validators.required],
      telephone: ['', Validators.required],
      inpatientOrOutpatientPsychiatricHospitalization: [
        '',
        Validators.required,
      ],
      historyOfSucideAttempts: ['', Validators.required],
    });
    this.buildForm();
  }

  buildForm() {
    this.page2Form = this.fb.group({
      educationAndEmploymentHistory: this.educationAndEmploymentHistory,
      mentalHealthInformation: this.mentalHealthInformation,
      socialHistory: this.socialHistory
    });
  }

  onSubmit() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-3'
    );
    console.log('page 2 values', this.page2Form.value);
  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-1'
    );
  }

  index: number = 0;
}
