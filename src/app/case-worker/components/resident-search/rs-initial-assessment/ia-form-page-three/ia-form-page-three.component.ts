import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-three',
  templateUrl: './ia-form-page-three.component.html',
  styleUrls: ['./ia-form-page-three.component.scss'],
})
export class IaFormPageThreeComponent implements OnInit {
  page3Form!: FormGroup;
  mentalStatusAssessment!: FormGroup;
  medicalInformation!: FormGroup;
  ideation!: FormGroup;
  generalAppearanceList = [
    { label: 'Well Groomed', value: 'well groomed' },
    { label: 'Dirty', value: 'dirty' },
    { label: 'Neat', value: 'neat' },
    { label: 'Careless', value: 'careless' },
    { label: 'Average', value: 'average' },
    { label: 'Slim', value: 'slim' },
    { label: 'Obese', value: 'obese' },
  ];

  thoughtForumList = [
    { label: 'Logical', value: 'logical' },
    { label: 'Coherent', value: 'coherent' },
    { label: 'Relevant', value: 'relevant' },
    { label: 'Loose Associations', value: 'loose associations' },
    { label: 'Confused', value: 'confused' },
    { label: 'Incoherent', value: 'incoherent' },
    { label: 'Flight of Ideas', value: 'flight of ideas' },
    { label: 'Thought blocking', value: 'Thought blocking' },
  ];

  moodList = [
    { label: 'Depressed', value: 'depressed' },
    { label: 'Elated', value: 'elated' },
    { label: 'Angry', value: 'angry' },
    { label: 'Happy', value: 'happy' },
    { label: 'Neutral', value: 'neutral' },
  ];

  affectList = [
    { label: 'Appropriate', value: 'appropriate' },
    { label: 'Fearful', value: 'fearful' },
    { label: 'Confused', value: 'confused' },
    { label: 'Apathetic', value: 'apathetic' },
    { label: 'Flat', value: 'flat' },
    { label: 'Liable', value: 'liable' },
    { label: 'Inappropriate', value: 'inappropriate' },
  ];

  ideationList = [
    { label: 'Thoughts of Suicide', key: 'thoughtsOfSuicide' },
    { label: 'Plan', key: 'suicidePlan' },
    { label: 'Thoughts of Homicide', key: 'thoughtsOfHomicide' },
    { label: 'Plan', key: 'homicidePlan' },
    { label: 'Delusional', key: 'delusional' },
    { label: 'Paranoid', key: 'paranoid' },
    { label: 'Hallucinations', key: 'hallucinations' },
  ];

  memoryList = [
    { label: 'Recent Memory', key: 'recentMemory' },
    { label: 'Remote Memory', key: 'remoteMemory' },
  ];
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.ideation = this.fb.group({
      thoughtsOfSuicide: [],
      suicidePlan: [],
      thoughtsOfHomicide: [],
      homicidePlan: [],
      delusional: [],
      paranoid: [],
      hallucinations: [],
    });

    this.mentalStatusAssessment = this.fb.group({
      orientation: this.fb.group({
        date: [''],
        time: [''],
        place: [''],
        person: [''],
      }),
      generalAppearance: [''],
      thoughtForum: [''],
      mood: this.fb.group({
        answeredByClient: [''],
        observedByInterviewer: [''],
      }),
      affect: [''],
      ideation: this.ideation,
      memory: this.fb.group({
        recentMemory: [],
        remoteMemory: [],
      }),
    });
    this.medicalInformation = this.fb.group({
      primaryPhysicianName: [],
      phone: [],
      clinic: [],
      hospital: [],
      physicianSpecialist: [],
      diagnosisAndCurrentTreatment: [],
      currentMedication: [],
    });
    this.buildForm();
  }

  buildForm() {
    this.page3Form = this.fb.group({
      mentalStatusAssessment: this.mentalStatusAssessment,
      medicalInformation: this.medicalInformation,
    });
    console.log(this.page3Form.get(['mentalStatusAssessment', 'ideation']));
  }

  onSubmit() {
    console.log(this.page3Form.value);
  }

  get ideationControls() {
    return (
      this.page3Form.get(['mentalStatusAssessment', 'ideation']) as FormGroup
    ).controls;
  }

  get moodAnsweredByClient() {
    return this.page3Form.get([
      'mentalStatusAssessment',
      'mood',
      'answeredByClient',
    ]) as FormControl;
  }

  get moodObservedByInterviewer() {
    return this.page3Form.get([
      'mentalStatusAssessment',
      'mood',
      'observedByInterviewer',
    ]) as FormControl;
  }
}

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any) {
    return Object.keys(value);
  }
}
