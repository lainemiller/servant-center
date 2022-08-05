import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthTrackerService } from '../../services/health-tracker.service';

@Component({
  selector: 'app-health-tracker',
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.scss'],
})
export class HealthTrackerComponent implements OnInit {
  showWeight: boolean = false;
  showTemperature: boolean = false;
  showBloodPressure: boolean = false;
  showBmi: boolean = false;
  showDrugScreen: boolean = false;
  showBreathalyzer: boolean = false;
  showBloodSugar: boolean = false;
  showOther: boolean = false;
  healthTrackerForm!: FormGroup;
  healthTrackerDetails: any;
  healthTrackerFormDetails: any;
  isFormFilled: boolean = false;
  veteranId = 4;

  constructor(
    private formBuilder: FormBuilder,
    private service: HealthTrackerService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getHealthTrackerByVeteranId();
  }

  showFilledForm() {
    for (let i = 0; i < this.healthTrackerDetails['result'].length; i++) {
      var trackingSubject =
        this.healthTrackerDetails['result'][i]['tracking_subject'];
      var trackingDetails = this.healthTrackerDetails['result'][i];
      if (trackingSubject === 'weight') {
        this.showWeight = true;
        this.healthTrackerForm.controls['weight'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'temperature') {
        this.showTemperature = true;
        this.healthTrackerForm.controls['temperature'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'blood pressure') {
        this.showBloodPressure = true;
        this.healthTrackerForm.controls['bloodPressure'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'BMI') {
        this.showBmi = true;
        this.healthTrackerForm.controls['BMI'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'drug screen') {
        this.showDrugScreen = true;
        this.healthTrackerForm.controls['drugScreen'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'breathalyzer') {
        this.showBreathalyzer = true;
        this.healthTrackerForm.controls['breathalyzer'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'blood sugar') {
        this.showBloodSugar = true;
        this.healthTrackerForm.controls['bloodSugar'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
      if (trackingSubject === 'other') {
        this.showOther = true;
        this.healthTrackerForm.controls['other'].patchValue({
          date: new Date(trackingDetails.note_date),
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
        });
      }
    }
  }

  getHealthTrackerByVeteranId() {
    let resp = this.service.getHealthTrackerByVeteranId(this.veteranId);
    resp.subscribe((data) => {
      console.log('Health Tracker API--->', data);
      this.healthTrackerDetails = data;
      if (!this.isFormFilled) {
        this.showFilledForm();
        this.isFormFilled = true;
      }
    });
  }

  

  buildForm() {
    this.healthTrackerForm = this.formBuilder.group({
      weight: this.formBuilder.group({
        trackingSubject: ['weight'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      temperature: this.formBuilder.group({
        trackingSubject: ['temperature'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      bloodPressure: this.formBuilder.group({
        trackingSubject: ['blood pressure'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      BMI: this.formBuilder.group({
        trackingSubject: ['BMI'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      drugScreen: this.formBuilder.group({
        trackingSubject: ['drug screen'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      breathalyzer: this.formBuilder.group({
        trackingSubject: ['breathalyzer'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      bloodSugar: this.formBuilder.group({
        trackingSubject: ['blood sugar'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
      other: this.formBuilder.group({
        trackingSubject: ['other'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
      }),
    });
  }

  onSubmit() {
    this.healthTrackerFormDetails = this.healthTrackerForm.value;
    if (!this.showWeight) {
      delete this.healthTrackerFormDetails['weight'];
    }
    if (!this.showTemperature) {
      delete this.healthTrackerFormDetails['temperature'];
    }
    if (!this.showBloodPressure) {
      delete this.healthTrackerFormDetails['bloodPressure'];
    }
    if (!this.showBmi) {
      delete this.healthTrackerFormDetails['BMI'];
    }
    if (!this.showDrugScreen) {
      delete this.healthTrackerFormDetails['drugScreen'];
    }
    if (!this.showBreathalyzer) {
      delete this.healthTrackerFormDetails['breathalyzer'];
    }
    if (!this.showBloodSugar) {
      delete this.healthTrackerFormDetails['bloodSugar'];
    }
    if (!this.showOther) {
      delete this.healthTrackerFormDetails['other'];
    }
    this.checkUpdateDetails();
    this.service
      .addHealthTrackerByVeteranID(
        this.veteranId,
        this.healthTrackerFormDetails
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response.status) {
          setTimeout(() => {
            this.getHealthTrackerByVeteranId();
          }, 800);
        }
      });
  }

  checkUpdateDetails() {
    for (let i = 0; i < this.healthTrackerDetails['result'].length; i++) {
      var trackingSubject =
        this.healthTrackerDetails['result'][i]['tracking_subject'];
      if (trackingSubject == 'blood pressure') {
        trackingSubject = 'bloodPressure';
      }
      if (trackingSubject == 'drug screen') {
        trackingSubject = 'drugScreen';
      }
      if (trackingSubject == 'blood sugar') {
        trackingSubject = 'bloodSugar';
      }
      if (this.healthTrackerFormDetails[trackingSubject]) {
        this.healthTrackerFormDetails[trackingSubject].isUpdate = true;
      }
    }
  }

  resetForm() {
    this.buildForm();
    this.isFormFilled=false;
    this.getHealthTrackerByVeteranId();
  }
}
