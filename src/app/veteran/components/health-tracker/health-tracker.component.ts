import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-tracker',
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.scss']
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.healthTrackerForm = this.formBuilder.group({
      weightDate: [null, Validators.required],
      weightMeasurement: ['', Validators.required],
      weightComments: ['', Validators.required],
      temperatureDate: [null, Validators.required],
      temperatureMeasurement: ['', Validators.required],
      temperatureComments: ['', Validators.required],
      bloodPressureDate: [null, Validators.required],
      bloodPressureMeasurement: ['', Validators.required],
      bloodPressureComments: ['', Validators.required],
      bmiDate: [null, Validators.required],
      bmiMeasurement: ['', Validators.required],
      bmiComments: ['', Validators.required],
      drugScreenDate: [null, Validators.required],
      drugScreenMeasurement: ['', Validators.required],
      drugScreenComments: ['', Validators.required],
      breathalyzerDate: [null, Validators.required],
      breathalyzerMeasurement: ['', Validators.required],
      breathalyzerComments: ['', Validators.required],
      bloodSugarDate: [null, Validators.required],
      bloodSugarMeasurement: ['', Validators.required],
      bloodSugarComments: ['', Validators.required],
      otherDate: [null, Validators.required],
      otherMeasurement: ['', Validators.required],
      otherComments: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.healthTrackerForm.value);
    //logic
  }

}
