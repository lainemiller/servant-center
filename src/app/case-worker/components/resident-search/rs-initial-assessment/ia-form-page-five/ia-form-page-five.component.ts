import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage5Service } from "src/app/case-worker/services/ia-page5.service";
@Component({
  selector: 'app-ia-form-page-five',
  templateUrl: './ia-form-page-five.component.html',
  styleUrls: ['./ia-form-page-five.component.scss'],
})
export class IaFormPageFiveComponent implements OnInit {
  page5Form!: FormGroup;
  preliminaryTreatmentGoals!: FormGroup;
  progressNote: any;
  constructor(private fb: FormBuilder, private router: Router, private service: IaPage5Service ) {

   }

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {

    this.preliminaryTreatmentGoals = this.fb.group({
      hppenedInMyLifeLastYear: ['', Validators.required],
      shortTermGoals: ['', Validators.required],
      longTermGoals: ['', Validators.required],
      strengthAndResources: ['', Validators.required],
      preferences: ['', Validators.required],
      needs: ['', Validators.required],
      supports: ['', Validators.required],
      additionalComments: ['', Validators.required]
    });
    this.buildForm();
  }

  buildForm() {
    this.page5Form = this.fb.group({
      preliminaryTreatmentGoals: this.preliminaryTreatmentGoals
    });
  }

  onSubmit() {
    this.service.initialTreatmentGoals(this.preliminaryTreatmentGoals.value).subscribe(() => {
      console.log('Submitted');
      console.log(this.preliminaryTreatmentGoals.value);
      
    });
    console.log('page 5 values', this.page5Form.value);
  }
  vetID(vetID: any, value: any) {
    throw new Error('Method not implemented.');
  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-4'
    );
  }
}
