import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-four',
  templateUrl: './ia-form-page-four.component.html',
  styleUrls: ['./ia-form-page-four.component.scss'],
})
export class IaFormPageFourComponent implements OnInit {
  page4Form!: FormGroup;
  substanceAbuseHistory!: FormGroup;
  legalHistoryOrIssues!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.substanceAbuseHistory = this.fb.group({
      chemicalsUsed: ['', Validators.required],
      drugsOfChoice: ['', Validators.required],
      amountsAndFrequencyOfUse: ['', Validators.required],
      routeOfAdministration: ['', Validators.required],
      negativeConsequences: ['', Validators.required],
      historyOfWithdrawal: ['', Validators.required],
      inpatientOrOutpatientRehabPrograms: ['', Validators.required],
      lastUseOfDrugsAndAlchohol: ['', Validators.required],
      currentAndPastTreatment: ['', Validators.required]
    });

    this.legalHistoryOrIssues = this.fb.group({
      priorConvictions: ['', Validators.required],
      incarcerations: ['', Validators.required],
      termsAndConditionsOfProbationOrParole: ['', Validators.required],
      nameAndAddresOfProbationOrParoleOfficer: ['', Validators.required],
      chargesPending: ['', Validators.required],
      outstandingWarrants: ['', Validators.required]
    });
    this.buildForm();
  }

  buildForm() {
    this.page4Form = this.fb.group({
      substanceAbuseHistory : this.substanceAbuseHistory,
      legalHistoryOrIssues : this.legalHistoryOrIssues
    });
  }

  onSubmit() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-5'
    );
    
    console.log(this.page4Form.value);
}

goBack(){
  this.router.navigateByUrl(
    'case-worker/resident-search/initial-assessment/page-3'
  );  
}
}
