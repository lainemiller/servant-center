import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genders,statuses } from '../../app.constants';
interface Gender {
  name: string;
}

interface Status {
  name: string;
}
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  public assessmentForm!: FormGroup;
  public firstName: any;
  public middleName: any;
  public lastName: any;
  public nickName: any;
  public dob: any;
  public maxDateValue: Date;
  public pob: any;
  public ssnNumber: any;
  public genders: Gender[];
  public gender:any;
  public maritalStatus:Status[];
  public maritalState:any;
  constructor(private formBuilder: FormBuilder) {
    this.genders=genders;
    this.maritalStatus=statuses;
    this.maxDateValue= new Date(new Date().getTime());
    this.buildForm();
  }

  ngOnInit(): void {
    console.log('assessment component');
  }

  buildForm() {
    this.assessmentForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nickName: ['', [Validators.required]],
      DOB: ['', Validators.required],
      POB: ['', [Validators.required]],
      SSNNumber: ['', [Validators.required]],
      selectedGenders: ['', Validators.required],
      selectedMaritalStatus:['',Validators.required]

    });
  }
  onSubmit(){
    console.log(this.assessmentForm.value);
    
  }
}
