import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-cw-transport-request',
  templateUrl: './cw-transport-request.component.html',
  styleUrls: ['./cw-transport-request.component.scss'],
})
export class CwTransportRequestComponent implements OnInit, OnChanges {
  @Input() requestFormObject: any;
  submitted = false;
  mobileMode = false;
  public minDateValue: any;
  public maxDateValue: any;
  public caseWorker: any;
  public firstName: any;
  public lastName: any;
  public appointmentDate: any;
  public time: any;
  public reason: any;
  public address: any;
  public city: any;
  public state!: any[];
  public zip: any;
  public coordinatorField: any;
  public nursingNotifiedField: any;
  public byField: any;
  public dateApproved: any;
  public dateField: any;
  defaultDate: any;
  tableData: any;
  selectedResident: any;
  public optionState: any;

  constructor(
    private formbuilder: FormBuilder,
    private service: TransportService
  ) {
    this.minDateValue = new Date(new Date().getTime());
    this.maxDateValue = new Date(new Date().getTime());
  }

  transportRequestForm!: FormGroup;

  @HostListener('window:resize')
  onWindowResize() {
    this.mobileMode = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.onWindowResize();

    // this.service.getTransportRequestFormData().subscribe((data) => {
    this.caseWorker = this.requestFormObject;
    console.log(this.requestFormObject);

    // console.log(this.caseWorker);

    this.firstName = this.caseWorker.firstName;

    this.lastName = this.caseWorker.lastName;
    this.appointmentDate = this.caseWorker.appointmentDate;
    this.time = this.caseWorker.time;
    this.reason = this.caseWorker.reason;
    this.coordinatorField = this.caseWorker.coordinatorField;
    this.nursingNotifiedField = this.caseWorker.nursingNotifiedField;
    this.address = this.caseWorker.address;
    this.city = this.caseWorker.city;
    this.state = this.caseWorker.state;
    console.log(this.state);

    this.zip = this.caseWorker.zip;
    this.dateApproved = this.caseWorker.dateApproved;
    this.byField = this.caseWorker.byField;
    this.dateField = this.caseWorker.dateField;

    this.buildForm();
    console.log(this.transportRequestForm.value);
    // });
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('login');
    console.log(change);
    if (change?.requestFormObject) {
      this.caseWorker = change.requestFormObject.currentValue;
    }
  }

  buildForm() {
    this.transportRequestForm = this.formbuilder.group({
      firstName: [this.firstName],
      lastName: [this.lastName, Validators.required],
      appointmentDate: [this.appointmentDate, Validators.required],
      time: [this.time, Validators.required],
      reason: [this.reason, Validators.required],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      state: [this.state, Validators.required],
      zip: [this.zip, Validators.required],
      coordinator: ['', Validators.required],
      approvedDate: [this.maxDateValue, Validators.required],
      nursingNotified: ['', Validators.required],
      by: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  get by() {
    return this.transportRequestForm.get('by');
  }

  get coordinator() {
    return this.transportRequestForm.get('coordinator');
  }
  get nursingNotified() {
    return this.transportRequestForm.get('nursingNotified');
  }

  get approvedDate() {
    return this.transportRequestForm.get('approvedDate');
  }

  get date() {
    return this.transportRequestForm.get('date');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.transportRequestForm.value);

    // }
  }
  reset() {
    this.buildForm();
  }

  selectResident(index: number) {
    this.selectedResident = this.caseWorker[index];
  }
}
