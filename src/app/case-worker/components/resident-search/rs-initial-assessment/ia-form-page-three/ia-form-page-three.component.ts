import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IaPage3Service } from 'src/app/case-worker/services/ia-page3.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-ia-form-page-three',
  templateUrl: './ia-form-page-three.component.html',
  styleUrls: ['./ia-form-page-three.component.scss'],
  providers: [MessageService],
})
export class IaFormPageThreeComponent implements OnInit {
  page3Form!: FormGroup;
  ia3: boolean = true;
  greyingOut: boolean = true;
  data: any;
  submitted!: boolean;
  selecteVetId: any;
  mentalStatusAssessment!: FormGroup;
  medicalInformation!: FormGroup;
  ideation!: FormGroup;
  generalAppearanceList: any = [
    { label: 'Well Groomed', value: 'well groomed' },
    { label: 'Dirty', value: 'dirty' },
    { label: 'Neat', value: 'neat' },
    { label: 'Careless', value: 'careless' },
    { label: 'Average', value: 'average' },
    { label: 'Slim', value: 'slim' },
    { label: 'Obese', value: 'obese' },
  ];
  selectedgeneralAppearance: any[] = [];
  thoughtForumList: any = [
    { label: 'Logical', value: 'logical' },
    { label: 'Coherent', value: 'coherent' },
    { label: 'Relevant', value: 'relevant' },
    { label: 'Loose Associations', value: 'loose associations' },
    { label: 'Confused', value: 'confused' },
    { label: 'Incoherent', value: 'incoherent' },
    { label: 'Flight of Ideas', value: 'flight of ideas' },
    { label: 'Thought blocking', value: 'Thought blocking' },
  ];
  selectdeThoughtForum: any[] = [];
  moodList = [
    { label: 'Depressed', value: 'depressed' },
    { label: 'Elated', value: 'elated' },
    { label: 'Angry', value: 'angry' },
    { label: 'Happy', value: 'happy' },
    { label: 'Neutral', value: 'neutral' },
  ];
  answeredByClient: any[] = [];
  observedByInterviewer: any[] = [];
  affectList = [
    { label: 'Appropriate', value: 'appropriate' },
    { label: 'Fearful', value: 'fearful' },
    { label: 'Confused', value: 'confused' },
    { label: 'Apathetic', value: 'apathetic' },
    { label: 'Flat', value: 'flat' },
    { label: 'Liable', value: 'liable' },
    { label: 'Inappropriate', value: 'inappropriate' },
  ];
  selectedAffect: any[] = [];

  ideationList = [
    { label: 'Thoughts of Suicide', key: 'thoughtsOfSuicide', value: '' },
    { label: 'Sucide Plan', key: 'suicidePlan', value: '' },
    { label: 'Thoughts of Homicide', key: 'thoughtsOfHomicide', value: '' },
    { label: 'Homicide Plan', key: 'homicidePlan', value: '' },
    { label: 'Delusional', key: 'delusional', value: '' },
    { label: 'Paranoid', key: 'paranoid', value: '' },
    { label: 'Hallucinations', key: 'hallucinations', value: '' },
  ];

  recentMemory = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];
  remoteMemory = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  underSpecialistCare = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  priPhyscianPartOfGP = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];
  constructor(private fb: FormBuilder, private router: Router,
    private messageService: MessageService,
    private service: IaPage3Service,
    private cacheData: ClipBoardService) {
    this.selecteVetId = this.cacheData.get('selectedResidentVeteranId');
    console.log('sel', this.selecteVetId);
    this.setForm();
  }

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  setForm() {
    this.service.getIAPage3(this.selecteVetId).subscribe((res) => {
      this.ia3 = false;
      this.greyingOut = false;
      this.data = res[0];
      this.buildForm();
      if (this.data) {
        this.mentalStatusAssessment.patchValue({
          date: this.data.orientation_date,
          time: this.data.orientation_time,
          person: this.data.orientation_person,
          generalAppearance: this.data.general_appearance[0] ,
          thoughtsOfSuicide: this.data.ideation,
          place: this.data.orientation_place,
          affect: this.data.affect,
          recentMemory: this.data.intact_recent_memory,
          remoteMemory: this.data.intact_remote_memory
        });

        this.medicalInformation.patchValue({
          primaryPhysicianName: this.data.primary_physician,
          phone: this.data.primary_physician_phone,
          clinic: this.data.clinic,
          hospital: this.data.hospital,
          diagnosis: this.data.diagnosis,
          currentMedication: this.data.current_medications,
          primaryCareProvider: this.data.primary_care_provider,
          priPhyscianPartOfGP: this.data.primary_physician_part_of_gp,
          physcianGP: this.data.physician_gp,
          clinicLocation: this.data.clinic_location,
          hospitalLocation: this.data.hospital_location,
          underSpecialistCare: this.data.under_specialist_care,
          specialistType: this.data.specialist_type,
          specialistName: this.data.specialist_name,
          currentTreatment: this.data.current_treatment
        });
      }
      else {

        this.mentalStatusAssessment.patchValue({
          generalAppearance: null,
          thoughtsOfSuicide: null,

        });
        this.medicalInformation.patchValue({
          primaryPhysicianName: null,
          phone: null,
          clinic: null,
          hospital: null,
          diagnosis: null,
          currentMedication: null,
          primaryCareProvider: null,
          priPhyscianPartOfGP: null,
          physcianGP: null,
          clinicLocation: null,
          hospitalLocation: null,
          underSpecialistCare: null,
          specialistType: null,
          specialistName: null,
          currentTreatment: null
        });
      }
    })
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
      veteranId: [this.selecteVetId],
      date: [''],
      time: [''],
      place: [''],
      person: [''],
      generalAppearance: [this.selectedgeneralAppearance, Validators.required],
      thoughtForum: [this.selectdeThoughtForum, Validators.required],
        answeredByClient: [this.answeredByClient, Validators.required],
        observedByInterviewer: [this.observedByInterviewer, Validators.required],
      affect: [this.selectedAffect, Validators.required],
      ideation: this.ideation,
        recentMemory: [],
        remoteMemory: [],
        recentMemoComments: [],
        remoteMemoComments: [],
    });
    this.medicalInformation = this.fb.group({
      primaryPhysicianName: ['', Validators.required],
      phone: ['', Validators.required],
      clinic: ['', Validators.required],
      hospital: ['', Validators.required],
      diagnosis: ['', Validators.required],
      currentMedication: ['', Validators.required],
      primaryCareProvider: ['', Validators.required],
      priPhyscianPartOfGP: ['', Validators.required],
      physcianGP: ['', Validators.required],
      clinicLocation: ['', Validators.required],
      hospitalLocation: ['', Validators.required],
      underSpecialistCare: ['', Validators.required],
      specialistType: ['', Validators.required],
      specialistName: ['', Validators.required],
      currentTreatment: ['', Validators.required],
      veteranId: [this.selecteVetId]
    });
  }

  buildForm() {
    this.page3Form = this.fb.group({
      mentalStatusAssessment: this.mentalStatusAssessment,
      medicalInformation: this.medicalInformation,
    });
    console.log('build form', this.page3Form.get(['mentalStatusAssessment', 'ideation']));
  }

  onSubmit() {
    this.submitted = true;
    let specialistType = this.medicalInformation.value.specialistType;
    let currMedications = this.medicalInformation.value.currentMedication;
    this.medicalInformation.value.specialistType = "{" + specialistType + "}";
    this.medicalInformation.value.currentMedication = "{" + currMedications + "}";
    this.service
      .initialTreatmentGoalsPage3(this.page3Form.value)
      .subscribe((data) => {
        console.log('Submitted');
      });
    // this.router.navigateByUrl(
    //   'case-worker/resident-search/initial-assessment/page-4'
    // );
    console.log('page 3 values', this.page3Form.value);
  }

  next() {
    console.log('clicked next');
    if (this.submitted) {
      this.router.navigateByUrl(
        'case-worker/resident-search/initial-assessment/page-4'
      );
    }
    else {
      alert("Please save first")
    }
  }
  reset() {

  }

  goBack() {
    this.router.navigateByUrl(
      'case-worker/resident-search/initial-assessment/page-2'
    );
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
