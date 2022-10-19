import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage5Service } from 'src/app/case-worker/services/ia-page5.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-ia-form-page-five',
  templateUrl: './ia-form-page-five.component.html',
  styleUrls: ['./ia-form-page-five.component.scss'],
  providers: [MessageService],
})
export class IaFormPageFiveComponent implements OnInit {
  page5Form!: FormGroup;
  preliminaryTreatmentGoals!: FormGroup;
  progressNote: any;
  selectedVetId!: number;
  shortTerm: any;
  data: any;
  greyingOut: boolean = true;
  ia5: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: IaPage5Service,
    private cacheData: ClipBoardService,
    private messageService: MessageService
  ) {
    this.selectedVetId = this.cacheData.get('selectedResidentVeteranId');
    this.setForm();
  }

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.preliminaryTreatmentGoals = this.fb.group({
      veteranId: [this.selectedVetId],
      hppenedInMyLifeLastYear: ['', Validators.required],
      shortTermGoals: ['', Validators.required],
      longTermGoals: ['', Validators.required],
      admiredAboutMe: ['', Validators.required],
      talents: ['', Validators.required],
      importantToMe: ['', Validators.required],
      people: ['', Validators.required],
      activities: ['', Validators.required],
      places: ['', Validators.required],
      peopleNotNeeded: ['', Validators.required],
      thingsNotNeeded: ['', Validators.required],
      notWorkingInLife: ['', Validators.required],
      changeAboutMyself: ['', Validators.required],
      activePartCommunity: ['', Validators.required],
      healthyAndSafe: ['', Validators.required],
      othersDoBest: ['', Validators.required],
    });
  }
  setForm() {
    this.service
      .getInitialTreatmentGoalsPage5(this.selectedVetId)
      .subscribe((res) => {
        this.ia5 = false;
        this.greyingOut = false;
        this.data = res[0];
        console.log('success on get page5 details', this.data);

        this.buildForm();
        if (this.data) {
          this.preliminaryTreatmentGoals.patchValue({
            hppenedInMyLifeLastYear: this.data.positives_in_year,
            shortTermGoals: this.data.immediate_concerns,
            longTermGoals: this.data.challenges_in_year,
            admiredAboutMe: this.data.reasons_admired,
            talents: this.data.talents,
            people: this.data.people_important_to_me,
            activities: this.data.activities_important_to_me,
            places: this.data.places_important_to_me,
            peopleNotNeeded: this.data.people_not_needed,
            thingsNotNeeded: this.data.things_not_needed,
            notWorkingInLife: this.data.things_not_working,
            changeAboutMyself: this.data.desired_life_changes,
            activePartCommunity: this.data.things_needed_for_community_activity,
            healthyAndSafe: this.data.things_needed_for_health_and_safety,
            othersDoBest: this.data.support_needed,
          });
        } else {
          this.preliminaryTreatmentGoals.patchValue({
            hppenedInMyLifeLastYear: null,
            shortTermGoals: null,
            longTermGoals: null,
            admiredAboutMe: null,
            talents: null,
            people: null,
            activities: null,
            places: null,
            peopleNotNeeded: null,
            thingsNotNeeded: null,
            notWorkingInLife: this.data.tnull,
            changeAboutMyself: null,
            activePartCommunity: null,
            healthyAndSafe: null,
            othersDoBest: null,
          });
        }
        console.log('page 5 Data:', this.data);
      });
  }

  buildForm() {
    this.page5Form = this.fb.group({
      preliminaryTreatmentGoals: this.preliminaryTreatmentGoals,
    });
  }

  onSubmit() {
    this.ia5 = true;
    this.greyingOut = true;
    this.service
      .initialTreatmentGoalsPage5(this.page5Form.value)
      .subscribe((data) => {
        console.log('Submitted');
        if (data.responseStatus === 'SUCCESS') {
          this.successMessage();
          this.ia5 = false;
          this.greyingOut = false;
        } else if (data.responseStatus === 'FAILURE') {
          this.errorMessage();
          this.ia5 = false;
          this.greyingOut = false;
        }
      });
    console.log('page 5 values', this.page5Form.value);
    this.setForm();
  }

  goBack() {
    if (!this.page5Form.touched) {
      this.router.navigateByUrl(
        'case-worker/resident-search/initial-assessment/page-4'
      );
    } else {
      this.infoMessage();
    }
  }

  cancel() {
    this.ia5 = true;
    this.greyingOut = true;
    this.setForm();
  }

  successMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully Updated Details',
    });
  }

  errorMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: 'Something Went Wrong!',
    });
  }

  infoMessage() {
    this.messageService.add({
      severity: 'info',
      summary: 'Save!',
      detail: 'Please Save the Details Before Going to Previous Step',
    });
  }
}
