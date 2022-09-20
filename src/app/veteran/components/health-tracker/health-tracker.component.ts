import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { HealthTrackerService } from '../../services/health-tracker.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-health-tracker',
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.scss'],
  providers: [MessageService],
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
  veteranId!: number;
  cols!: any[];
  tableValues!: any[];
  tableWeightValues!: any[];
  tableTemperatureValues!: any[];
  tableBloodPressureValues!: any[];
  tableBmiValues!: any[];
  tableDrugScreenValues!: any[];
  tableBreathalyzerValues!: any[];
  tableBloodSugarValues!: any[];
  tableOtherValues!: any[];
  isShowSpinner:boolean=true

  constructor(
    private formBuilder: FormBuilder,
    private service: HealthTrackerService,
    private cacheData: ClipBoardService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    document.getElementById("overlay")!.style.display="block"
    this.veteranId = this.cacheData.get('veteranId');
    this.buildForm();
    this.getHealthTrackerByVeteranId();
    this.showSelectedTable();
  }

  showFilledForm() {
    let currentHealthTrackerDetails = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.current_tracker === true;
      }
    );
    for (let i = 0; i < currentHealthTrackerDetails.length; i++) {
      var trackingSubject = currentHealthTrackerDetails[i]['tracking_subject'];
      var trackingDetails = currentHealthTrackerDetails[i];
      let trackerDate = new Date(
        new Date(trackingDetails.note_date).toUTCString()
      );
      let healthTrackerDate =
        trackerDate.getMonth() +
        1 +
        '/' +
        trackerDate.getDate() +
        '/' +
        trackerDate.getFullYear();
      console.log('tracker date', healthTrackerDate);
      if (trackingSubject === 'weight') {
        this.showWeight = true;
        this.healthTrackerForm.controls['weight'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'temperature') {
        this.showTemperature = true;
        this.healthTrackerForm.controls['temperature'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'blood pressure') {
        this.showBloodPressure = true;
        this.healthTrackerForm.controls['bloodPressure'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'BMI') {
        this.showBmi = true;
        this.healthTrackerForm.controls['BMI'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'drug screen') {
        this.showDrugScreen = true;
        this.healthTrackerForm.controls['drugScreen'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'breathalyzer') {
        this.showBreathalyzer = true;
        this.healthTrackerForm.controls['breathalyzer'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'blood sugar') {
        this.showBloodSugar = true;
        this.healthTrackerForm.controls['bloodSugar'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
      if (trackingSubject === 'other') {
        this.showOther = true;
        this.healthTrackerForm.controls['other'].patchValue({
          date: healthTrackerDate,
          measurement: trackingDetails.measurement,
          comments: trackingDetails.tracking_comments,
          currentTracker: trackingDetails.current_tracker,
          isUpdate: trackingDetails.current_tracker,
        });
      }
    }
  }
 
  getHealthTrackerByVeteranId() {
    let resp = this.service.getHealthTrackerByVeteranId(this.veteranId);
    resp.subscribe((data) => {
      console.log('Health Tracker API--->', data);
      this.healthTrackerDetails = data;
      if(this.healthTrackerDetails){
        console.log('inside grayyy');
        
        
        document.getElementById("overlay")!.style.display="none"
        this.isShowSpinner=false;
      }
      this.showFilledForm();
      this.showHealthTrackerTable();
    });
  }

  showHealthTrackerTable() {
    this.tableValues = this.healthTrackerDetails;
    this.tableWeightValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'WEIGHT';
      }
    );
    this.tableTemperatureValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'TEMPERATURE';
      }
    );
    this.tableBloodPressureValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'BLOOD PRESSURE';
      }
    );
    this.tableDrugScreenValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'DRUG SCREEN';
      }
    );
    this.tableBreathalyzerValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'BREATHALYZER';
      }
    );
    this.tableBloodSugarValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'BLOOD SUGAR';
      }
    );
    this.tableBmiValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'BMI';
      }
    );
    this.tableOtherValues = this.healthTrackerDetails['data'].filter(
      (data: any) => {
        return data.tracking_subject.toUpperCase() === 'OTHER';
      }
    );
  }

  buildForm() {
    this.healthTrackerForm = this.formBuilder.group({
      weight: this.formBuilder.group({
        trackingSubject: ['weight'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      temperature: this.formBuilder.group({
        trackingSubject: ['temperature'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      bloodPressure: this.formBuilder.group({
        trackingSubject: ['blood pressure'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      BMI: this.formBuilder.group({
        trackingSubject: ['BMI'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      drugScreen: this.formBuilder.group({
        trackingSubject: ['drug screen'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      breathalyzer: this.formBuilder.group({
        trackingSubject: ['breathalyzer'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      bloodSugar: this.formBuilder.group({
        trackingSubject: ['blood sugar'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
      }),
      other: this.formBuilder.group({
        trackingSubject: ['other'],
        date: [null, Validators.required],
        measurement: ['', Validators.required],
        comments: ['', Validators.required],
        isUpdate: [false],
        currentTracker: [true],
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
    this.checkNewTracker();
  }

  async checkNewTracker() {
    let healthTrackerValue: any[] = [];
    let updateHealthTrackerValue: any[] = [];
    console.log('initial value form', healthTrackerValue);
    let formValue: any[] = Object.values(this.healthTrackerFormDetails);
    var currentValue = this.healthTrackerDetails['data'].filter((data: any) => {
      return data.current_tracker === true;
    });
    var newHealthTracker = formValue.filter((data: any) => {
      return data.isUpdate === false;
    });
    for (let i = 0; i < newHealthTracker.length; i++) {
      healthTrackerValue.push(newHealthTracker[i]);
    }
    console.log('new Tracker Form', newHealthTracker);
    console.log('Form value', formValue);
    console.log('current value', currentValue);
    for (let i = 0; i < formValue.length; i++) {
      for (let j = 0; j < currentValue.length; j++) {
        if (formValue[i].trackingSubject === currentValue[j].tracking_subject) {
          var formValueDate = new Date(formValue[i].date);
          var formDate =
            formValueDate.getUTCDate() +
            '/' +
            formValueDate.getUTCMonth() +
            '/' +
            formValueDate.getUTCFullYear();
          var currentValueDate = new Date(new Date(currentValue[j].note_date).toUTCString());
          var currentDate =
            currentValueDate.getUTCDate() +
            '/' +
            currentValueDate.getUTCMonth() +
            '/' +
            currentValueDate.getUTCFullYear();
            console.log('formDate',formDate);
            console.log('currentDate',currentDate);
            console.log('comparision',formDate === currentDate);
          if (
            formDate === currentDate &&
            formValue[i].measurement !== currentValue[j].measurement
          ) {
            console.log('changed form', formValue[i]);
            let oldTrackerValue = currentValue.filter((data: any) => {
              let trackerDate = new Date(
                new Date(data.note_date).toUTCString()
              );
              data.note_date =
                trackerDate.getMonth() +
                1 +
                '/' +
                trackerDate.getDate() +
                '/' +
                trackerDate.getFullYear();
              return data.tracking_subject === formValue[i].trackingSubject;
            });
            updateHealthTrackerValue.push(oldTrackerValue);
            console.log('old', oldTrackerValue);
            healthTrackerValue.push(formValue[i]);
            console.log('new', formValue[i]);
          }
          if (formDate != currentDate) {
            console.log('date changed form', formValue[i]);
            let oldTrackerValue = currentValue.filter((data: any) => {
              let trackerDate = new Date(
                new Date(data.note_date).toUTCString()
              );
              data.note_date =
                trackerDate.getMonth() +
                1 +
                '/' +
                trackerDate.getDate() +
                '/' +
                trackerDate.getFullYear();
              return data.tracking_subject === formValue[i].trackingSubject;
            });
            updateHealthTrackerValue.push(oldTrackerValue);
            console.log('date old', oldTrackerValue);
            healthTrackerValue.push(formValue[i]);
            console.log('date new', formValue[i]);
          }
          if (formValue[i].comments != currentValue[j].tracking_comments) {
            console.log('comments changed form', formValue[i]);
            let oldTrackerValue = currentValue.filter((data: any) => {
              let trackerDate = new Date(
                new Date(data.note_date).toUTCString()
              );
              data.note_date =
                trackerDate.getMonth() +
                1 +
                '/' +
                trackerDate.getDate() +
                '/' +
                trackerDate.getFullYear();
              return data.tracking_subject === formValue[i].trackingSubject;
            });
            updateHealthTrackerValue.push(oldTrackerValue);
            console.log('comments old', oldTrackerValue);
            healthTrackerValue.push(formValue[i]);
            console.log('comments new', formValue[i]);
          }
        }
      }
    }
    if (updateHealthTrackerValue.length != 0) {
      let resp = await this.service
        .updateHealthTrackerByVeteranID(
          this.veteranId,
          updateHealthTrackerValue
        )
        .subscribe((response: any) => {
          console.log(response);
        });
    }
    if (healthTrackerValue.length != 0) {
      let resp = await this.service
        .addHealthTrackerByVeteranID(this.veteranId, healthTrackerValue)
        .subscribe((response: any) => {
          console.log(response);
        });
      setTimeout(() => {
        this.getHealthTrackerByVeteranId();
      }, 1000);
      this.sucessMessage();
    }

    for (let i = 0; i < healthTrackerValue.length; i++) {
      console.log('insert submitted form value', healthTrackerValue[i]);
    }
    for (let i = 0; i < updateHealthTrackerValue.length; i++) {
      console.log('update submitted form value', updateHealthTrackerValue[i]);
    }
    while (healthTrackerValue.length > 0) {
      healthTrackerValue.pop();
    }
    while (updateHealthTrackerValue.length > 0) {
      updateHealthTrackerValue.pop();
    }
  }

  showSelectedTable() {
    this.cols = [
      { field: 'note_date', header: 'Date', date: true, format: 'dd/MM/yyyy' },
      { field: 'measurement', header: 'Measurement' },
      { field: 'tracking_comments', header: 'Comment' },
    ];
  }

  resetForm() {
    this.buildForm();
    this.isFormFilled = false;
    this.getHealthTrackerByVeteranId();
    this.resetMessage();
  }

  sucessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Health Tracker updated sucessfully',
    });
  }

  resetMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Health Tracker Form reset completed',
    });
  }
}
