import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VeteranDashboardService } from '../../services/veteran-dashboard.service';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss'],
})
export class TreatmentPlanComponent implements OnInit {
  public treatmentPlanForm!: FormGroup;
  public treatmentIssuesForm!: FormGroup;
  public treatmentGoals: any;
  public issuesArray: any = [];
  public delete: boolean = true;
  public error: boolean = false;
  public maxDateValue: any;
  public eventId: any;
  public data: any;
  public formView = true;
  public treatmentArr: any;
  public formData:any;

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranDashboardService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  setForm() {
    this.service.getTreatmentData().subscribe((res) => {
      this.data = res;
      this.buildForm();
      this.treatmentPlanForm.patchValue({
        firstName: this.data.fname,
        lastName: this.data.lname,
        recordNo: this.data.recNo,
        dateOfBirth1: this.data.dob1,
        intakeDOB: this.data.intakeDate,
        hmisIdNo: this.data.hmisId,
      });
      console.log(this.treatmentPlanForm.value);
    });
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
    this.formView = false;
    console.log(this.treatmentPlanForm.value);
    this.treatmentArr = this.treatmentPlanForm.get('treatmentIssues')?.value;
    console.log(this.treatmentArr);
    this.showTopView();
    this.formData= this.treatmentPlanForm.value;
    
  }
  showTopView() {
    const p = document.querySelector('#prnt');
    console.log(p)
    p?.scrollIntoView();
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
      goals: ['', Validators.required],
      plans: ['', Validators.required],
      strategies: ['', Validators.required],
      targetDate: [null, Validators.required],
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
  get getControl() {
    return this.treatmentPlanForm.controls;
  }

  deleteField() {
    this.issuesArray.value.pop();
    this.issuesArray.removeAt(-1);
    if (this.issuesArray.value.length === 3) {
      this.delete = true;
    }
  }
  resetForm() {
    this.formView=true;
    this.showTopView();
    this.buildForm();
    this.setForm();
  }
  validateInput(event: any) {
    let className = event.target.id;
    let section = document.querySelector(`.${className}`);
    if (event.target.value === '') {
      section?.classList.remove('hide-display');
    } else {
      section?.classList.add('hide-display');
    }
  }
  getDate(event: any) {
    this.eventId = event.target.id;
    this.validateDate(event.target.value);
  }
  showForm() {
    this.formView = true;
  }
  validateDate(event: any) {
    let section;
    if (this.eventId) {
      section = document.querySelector(`.${this.eventId}`);
    }
    if (event === '' || event === null) {
      section?.classList.remove('hide-display');
    } else {
      section?.classList.add('hide-display');
    }
  }
  downloadForm() {
    window.print();
  }
}
