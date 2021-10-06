import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss'],
})
export class TreatmentPlanComponent implements OnInit {
  treatmentPlanForm!: FormGroup;
  treatmentIssuesForm!: FormGroup;
  treatmentGoals: any;
  issuesArray: any = [];
  delete: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.treatmentPlanForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      recordNo: ['', Validators.required],
      dateOfBirth1: [null, Validators.required],
      dateOfBirth2: [null, Validators.required],
      intakeDOB: [null, Validators.required],
      hmisIdNo: ['', Validators.required],
      veteranDiagnosis: ['', Validators.required],
      veteranSupports: ['', Validators.required],
      veteranStrengths: ['', Validators.required],
      treatmentIssues: this.initializeIssuesFormArray(),
      veteranNotes: ['', Validators.required],
    });

    this.treatmentIssuesForm = this.formBuilder.group({
      physicalHealth: this.initializeIssuesArray(),
      mentalHealth: this.initializeIssuesArray(),
    });

    this.treatmentGoals = [
      {
        label: 'PHYSICAL HEALTH',
        formName: 'physicalHealth',
        controls: this.physicalHealth.controls,
      },
      {
        label: 'MENTAL HEALTH',
        formName: 'mentalHealth',
        controls: this.mentalHealth.controls,
      },
    ];
  }

  onSubmit() {
    console.log(this.treatmentPlanForm.value);
  }

  initializeIssuesFormArray() {
    this.issuesArray = this.formBuilder.array([]);
    for (let i = 0; i < 3; i++) {
      this.issuesArray.push(this.initialiseIssuesFormGroup());
    }
    return this.issuesArray;
  }

  initialiseIssuesFormGroup() {
    return this.formBuilder.group({
      physicalHealth: this.initializeIssuesArray(),
      mentalHealth: this.initializeIssuesArray(),
    });
  }

  initializeIssuesArray() {
    const tempArray = this.formBuilder.array([]);
    for (let i = 0; i < 3; i++) {
      tempArray.push(this.getIssues());
    }
    return tempArray;
  }

  getIssues(): FormGroup {
    return this.formBuilder.group({
      goals: [],
      plans: [],
      strategies: [],
      targetDate: [],
    });
  }

  get physicalHealth(): FormArray {
    return this.treatmentIssuesForm.get('physicalHealth') as FormArray;
  }

  get mentalHealth(): FormArray {
    return this.treatmentIssuesForm.get('mentalHealth') as FormArray;
  }

  get treatmentIssues(): FormArray {
    return this.treatmentPlanForm.get('treatmentIssues') as FormArray;
  }

  addNewField() {
    this.issuesArray.push(this.initialiseIssuesFormGroup());
    if (this.issuesArray.value.length > 3) {
      this.delete = false;
    }
  }

  deleteField() {
    this.issuesArray.value.pop();
    this.issuesArray.removeAt(-1);
    console.log(this.issuesArray.controls);
    if (this.issuesArray.value.length === 3) {
      this.delete = true;
    }
    console.log(this.issuesArray);
  }
}
