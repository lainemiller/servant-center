import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-five',
  templateUrl: './ia-form-page-five.component.html',
  styleUrls: ['./ia-form-page-five.component.scss'],
})
export class IaFormPageFiveComponent implements OnInit {
  page5Form!: FormGroup;
  preliminaryTreatmentGoals!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {

    this.preliminaryTreatmentGoals = this.fb.group({
      shortTermGoals: ['', Validators.required],
      longTermGoals: ['', Validators.required],
      ptDate: ['', Validators.required]
    });
    this.buildForm();
  }

  buildForm() {
    this.page5Form = this.fb.group({
      preliminaryTreatmentGoals: this.preliminaryTreatmentGoals
    });
  }

  onSubmit() {
    console.log('page 5 values', this.page5Form.value);
  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-4'
    );
  }
}
