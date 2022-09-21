import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage4Service } from 'src/app/case-worker/services/ia-page4.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';

@Component({
  selector: 'app-ia-form-page-four',
  templateUrl: './ia-form-page-four.component.html',
  styleUrls: ['./ia-form-page-four.component.scss'],
})
export class IaFormPageFourComponent implements OnInit {
  submitted!: boolean;
  selecteVetId!: number;
  page4Form!: FormGroup;
  substanceAbuseHistory!: FormGroup;
  legalHistoryOrIssues!: FormGroup;
  currentlyConsumesAlcohol = [
    { label: 'Currently Consumes Alcohol', key: 'currentlyConsumesAlcohol' },
  ];
  currentlyConsumesDrugs = [
    { label: 'Currently Consumes Drugs', key: 'currentlyConsumesDrugs' },
  ];
  currentlyConsumesTobacco = [
    { label: 'Currently Consumes Tobacco', key: 'currentlyConsumesTobacco' },
  ];
  currentlyConsumesCaffeine = [
    { label: 'Currently Consumes Caffeine', key: 'currentlyConsumesCaffeine' },
  ];
  withdrawalHistory = [
    { label: 'Withdrawal History', key: 'withdrawalHistory' },
  ];
  everArrested = [{ label: 'Ever Arrested', key: 'everArrested' }];
  everConvicted = [{ label: 'Ever Convicted', key: 'everConvicted' }];
  currentPendingCharges = [
    { label: 'Current Pending Charges', key: 'currentPendingCharges' },
  ];
  outstandingWarrants = [{label: 'Outstanding Warrants', key: 'outstandingWarrants'}];
  onProbationOrParole = [
    { label: 'On Probation or Parole', key: 'onProbationOrParole' },
  ];

  constructor(private fb: FormBuilder, private router: Router, private service: IaPage4Service, private cacheData: ClipBoardService) {
    this.selecteVetId = this.cacheData.get("selectedResidentVeteranId")
    console.log('sel', this.selecteVetId);
  }

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.substanceAbuseHistory = this.fb.group({
      veteranId: [this.selecteVetId, Validators.required],
      histOfAlcohol: ['', Validators.required],
      currentlyConsumesAlcohol: ['', Validators.required],
      currentAlcoholIntakeFreq: ['', Validators.required],
      histOfDrugs: ['', Validators.required],
      currentlyConsumesDrugs: ['', Validators.required],
      currentDrugIntakeFreq: ['', Validators.required],
      lastUseOfDrugAlcohol: ['', Validators.required],
      currentDrugAlcoholTreatment: ['', Validators.required],
      withdrawalHistory: ['', Validators.required],
      histOfTobacco: ['', Validators.required],
      currentlyConsumesTobacco: ['', Validators.required],
      currentTobaccoIntakeFreq: ['', Validators.required],
      histOfCaffeine: ['', Validators.required],
      currentlyConsumesCaffeine: ['', Validators.required],
      currentCaffeineIntakeFreq: ['', Validators.required],
      treatmentPrograms: ['', Validators.required],
    });

    this.legalHistoryOrIssues = this.fb.group({
      veteranId: [this.selecteVetId, Validators.required],
      everArrested: ['', Validators.required],
      arrestedReason: ['', Validators.required],
      everConvicted: ['', Validators.required],
      convictedReason: ['', Validators.required],
      currentPendingCharges: ['', Validators.required],
      charges: ['', Validators.required],
      outstandingWarrants: ['', Validators.required],
      warrantReason: ['', Validators.required],
      onProbationOrParole: ['', Validators.required],
      officerName: ['', Validators.required],
      officerAddress: ['', Validators.required],
      probationOrParoleTerms: ['', Validators.required],
    });
    this.buildForm();
  }

  buildForm() {
    this.page4Form = this.fb.group({
      substanceAbuseHistory: this.substanceAbuseHistory,
      legalHistoryOrIssues: this.legalHistoryOrIssues,
    });
  }

  onSubmit() {
    // let chargesLegal = this.legalHistoryOrIssues.value.charges;
    // this.legalHistoryOrIssues.value.charges = "{"+chargesLegal + "}";
    this.submitted = true;
    
    this.service.initialTreatmentGoalsPage4(this.page4Form.value).subscribe((data) => {
      console.log('Submitted');
    });


    // this.router.navigateByUrl(
    //   'case-worker/resident-search/initial-assessment/page-5'
    // );

    console.log('page 4 values', this.page4Form.value);
  }
  next(){
    console.log('clicked next');
    if(this.submitted){
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-4'
    );
    }
    else{
      alert("Please save first")
    }
  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-3'
    );
  }
}
