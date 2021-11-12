import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/case-worker/services/data.service';
@Component({
  selector: 'app-rs-treatment-plan',
  templateUrl: './rs-treatment-plan.component.html',
  styleUrls: ['./rs-treatment-plan.component.scss'],
})
export class RsTreatmentPlanComponent implements OnInit {

  treatmentPlanForm!: FormGroup;
  treatmentIssuesForm!: FormGroup;
  treatmentGoals: any;
  issuesArray: any = [];
  delete: boolean = true;
  public error:boolean = false;
  public maxDateValue:any;
  public eventId:any;
  public data:any;
  public length:number=4;
  constructor(private formBuilder: FormBuilder, private service:DataService) {
 this.setForm();
    this.maxDateValue = new Date(new Date().getTime());
  }
  ngOnInit(): void {
    this.buildForm();
  }
setForm()
{
  this.service.getTreatmentPlanData().subscribe((res)=>
  {
    this.data=res;
    this.length= this.data.treatmentIssues.length;
   this.buildForm();
    this.treatmentPlanForm.patchValue({
      firstName:this.data.fname,
      lastName:this.data.lname,
      recordNo: this.data.recNo,
      dateOfBirth1:this.data.dob1,
      dateOfBirth2:this.data.dob2,
      intakeDOB:this.data.intakeDate,
      hmisIdNo:this.data.hmisId,
      treatmentIssues:this.data.treatmentIssues
      
    })
    console.log(this.treatmentPlanForm.value)
  })
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
    for (let i = 0; i < this.length; i++) {
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
      targetDate: [null,Validators.required],
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
    if (this.issuesArray.value.length > this.length) {
      this.delete = false;
    }
  }

  deleteField() {
    this.issuesArray.value.pop();
    this.issuesArray.removeAt(-1);
    console.log(this.issuesArray.controls);
    if (this.issuesArray.value.length === this.length) {
      this.delete = true;
    }
    console.log(this.issuesArray);
  }
  get getControl() {
    return this.treatmentPlanForm.controls;
  }
 
  resetForm()
  {
    this.buildForm();
    this.setForm();
  }
validate(event:any)
{
    let cl= event.target.id;
    let k=  document.querySelector(`.${cl}`);
    if(event.target.value==='')
    {
      
      k?.classList.remove('dis-none');
    }
    else{
      k?.classList.add('dis-none');
    }
}
getDate(event:any)
{
this.eventId= event.target.id;
this.val(event.target.value);
}
val(event:any)
{
  let k;
if(this.eventId)
{
 k= document.querySelector(`.${this.eventId}`);
}
 if(event===''|| event===null )
 { 
   console.log(event)
   k?.classList.remove('dis-none');
 }
 else{
   k?.classList.add('dis-none');
 }
}
}
