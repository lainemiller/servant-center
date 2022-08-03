import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { VeteranprofileService } from '../../../services/veteranprofile.service';
import { states, destinationAddresses } from '../../../app.constants';
import { VeteranProfileResponse } from 'src/app/shared/models/VeteranProfileResponse';
//import { TransportService } from '../../services/transport.service';
//

interface State {
  value: string;
}
interface DropDown {
  name: string;
}
@Component({
  selector: 'app-transportation-request-form',
  templateUrl: './transportation-request-form.component.html',
  styleUrls: ['./transportation-request-form.component.scss'],
})
export class TransportationRequestFormComponent implements OnInit {
  formTitle = 'TRANSPORTATION REQUEST FORM';

  transportRequestForm!: FormGroup;
  public state: any;
  public minDateValue: any;
  public maxDateValue: any;
  public veteranData: any;
  public firstName: any;
  public lastName: any;
 // public address1: any;
  // public city: any;
  // public zipcode: any;
  public data: any;
  public states: State[];
  public requestedDate:any;
  // selectedState!: State;
  selectedState!: any;
  userId: number = 7;
  public destinationAddresses!: DropDown[];
  public showOtherAddressTextBox: boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.minDateValue = new Date(new Date().getTime());
    this.states = states;
    this.destinationAddresses = destinationAddresses;
	  this.maxDateValue = new Date(new Date().getTime());
  }

//transportRequestForm!: FormGroup;

 // @HostListener('window:resize')
 // onWindowResize() {
  //  this.mobileMode = window.innerWidth < 768;
  //}
  
 
  
  ngOnInit(): void {
    this.selectedState = this.states[1];

    this.service
      .getProfileData(this.userId)
      .subscribe((data: VeteranProfileResponse) => {
        this.veteranData = data;
        this.firstName = this.veteranData.firstName;
        this.lastName = this.veteranData.lastName;
        // this.address1 = this.veteranData.address1;
        // this.city = this.veteranData.city;
        this.state = this.veteranData.state;
        // console.log(this.selectedState)
        // this.zipcode = this.veteranData.zipcode;
		this.requestedDate= this.veteranData.requestedDate;

        this.buildForm();
        console.log(this.transportRequestForm.value);
      });
  }

  buildForm() {
    this.transportRequestForm = this.formBuilder.group({
      firstName: ['Harry', Validators.required],
      lastName: ['Potter', Validators.required],
      reason: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required],
      destinationAddress: ['', Validators.required],
      destinationAddress2: [''],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      zipcode: ['', Validators.required],
	  dateRequested: [this.maxDateValue, Validators.required],
    });
  }

  get reason() {
    return this.transportRequestForm.get('reason');
  }
  get appointmentDate() {
    return this.transportRequestForm.get('appointmentDate');
  }
  get time() {
    return this.transportRequestForm.get('time');
  }
  get city() {
    return this.transportRequestForm.get('city');
  }

  get destinationAddress() {
    return this.transportRequestForm.get('destinationAddress');
  }

  get destinationAddress2() {
    return this.transportRequestForm.get('destinationAddress2');
  }

  get zipcode() {
    return this.transportRequestForm.get('zipcode');
  }
  
  get dateRequested() {
    return this.transportRequestForm.get('requestedDate');
  }

  get control() {
    return this.transportRequestForm.controls;
  }

  onChange(evt: any) {
    console.log('changed option', evt);
    if (evt.value.value === 'other') {
      this.showOtherAddressTextBox = true;
      this.transportRequestForm.patchValue({
        city: '',
        selectedState: '',
        zipcode: '',
      });
    } else {
      this.showOtherAddressTextBox = false;
      if (evt.value.value === 'Kernersville') {
        this.transportRequestForm.patchValue({
          city: 'Kernersville',
          selectedState: { value: 'NC', name: 'North Carolina' },
          zipcode: '27284',
        });
      } else if (evt.value.value === 'Salisbury') {
        this.transportRequestForm.patchValue({
          city: 'Salisbury',
          selectedState: { value: 'NC', name: 'North Carolina' },
          zipcode: '28144',
        });
      } else if (evt.value.value === 'Durham') {
        this.transportRequestForm.patchValue({
          city: 'Durham',
          selectedState: { value: 'NC', name: 'North Carolina' },
          zipcode: '27705',
        });
      }
    }
  }
  reset() {
    this.buildForm();
  }

  onSubmit(): void {
  
   console.log("clicked");
 
   let t=new Date(this.transportRequestForm.value.time)
   
   this.transportRequestForm.value.time = t.getHours() +':'+ t.getMinutes() +':' +t.getSeconds()
   
  this.transportRequestForm.value.selectedState=this.transportRequestForm.value.selectedState.name,
  
  this.transportRequestForm.value.destinationAddress= this.transportRequestForm.value.destinationAddress.name
    if (this.transportRequestForm.value.destinationAddress.name === 'Other') {
      this.transportRequestForm.value.destinationAddress.name =
        this.transportRequestForm.value.destinationAddress2;
    }
	this.service.saveTransportationForm(this.transportRequestForm.value).subscribe((data)=>{
	console.log("Form submitted");
   });
   
  // this.transportRequestForm.reset();
	
    console.log("FormData ",this.transportRequestForm.value);
	
  }
}
