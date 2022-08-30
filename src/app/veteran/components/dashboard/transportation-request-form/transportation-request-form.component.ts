import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { VeteranprofileService } from '../../../services/veteranprofile.service';
import { states, destinationAddresses } from '../../../app.constants';
import { VeteranProfileResponse } from 'src/app/shared/models/VeteranProfileResponse';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';

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
  submitted = false;
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
  public dateRequested:any;
  // selectedState!: State;
  selectedState!: any;
  userId!: number;
  veteran_id!:number;
  public destinationAddresses!: DropDown[];
  public showOtherAddressTextBox: boolean = false;
  
  constructor(
    private cacheData: ClipBoardService,
    private formBuilder: FormBuilder,
    private service: VeteranprofileService
  ) {
    this.minDateValue = new Date(new Date().getTime()); 
    this.states = states;
    this.destinationAddresses = destinationAddresses;
  }
  
  ngOnInit(): void {
    this.userId = this.cacheData.get("veteranId")
    this.veteran_id = this.cacheData.get("veteranId")
    this.selectedState = this.states[1];
        
    this.service
      .getProfileData(this.userId)
      .subscribe((data: VeteranProfileResponse) => {
        this.veteranData = data;
        console.log("Veteran Data is ---> ",this.veteranData);
        this.firstName = this.veteranData.data[0].first_name;
        this.lastName = this.veteranData.data[0].last_name;
        // this.address1 = this.veteranData.address1;
        // this.city = this.veteranData.city;
        this.state = this.veteranData.state;
        // console.log(this.selectedState)
        // this.zipcode = this.veteranData.zipcode;
        
        this.buildForm();
        console.log(this.transportRequestForm.value);
      });
  }
 
  buildForm() {
    this.transportRequestForm = this.formBuilder.group({
      veteran_id:[this.veteran_id],
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      reason: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required],
      destinationAddress: ['', Validators.required],
      destinationAddress2: [''],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      zipcode: ['', Validators.required],
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
    this.submitted = false;
  }

  onSubmit(): void {
  
  this.transportRequestForm.value.dateRequested= (new Date().getMonth() +1) +'/' + new Date().getUTCDate() +'/' + new Date().getFullYear();

   let t=new Date(this.transportRequestForm.value.time)
   this.transportRequestForm.value.time = t.getHours() +':'+ t.getMinutes() +':' +t.getSeconds()
   
  this.transportRequestForm.value.selectedState=this.transportRequestForm.value.selectedState.name,
  
  this.transportRequestForm.value.destinationAddress= this.transportRequestForm.value.destinationAddress.name
    if (this.transportRequestForm.value.destinationAddress.name === 'Other') {
        this.transportRequestForm.value.destinationAddress.name =
        this.transportRequestForm.value.destinationAddress2;
    }

	this.service.saveTransportationForm(this.transportRequestForm.value).subscribe((data)=>{
    this.submitted = true;
	  console.log("Form Submitted");
    console.log("FormData ",this.transportRequestForm.value);
   });
   
   //this.transportRequestForm.reset();
   this.transportRequestForm.controls["reason"].reset()
   this.transportRequestForm.controls["appointmentDate"].reset()
   this.transportRequestForm.controls["time"].reset()
   this.transportRequestForm.controls["city"].reset()
   this.transportRequestForm.controls["selectedState"].reset()
   this.transportRequestForm.controls["destinationAddress2"].reset()
   this.transportRequestForm.controls["destinationAddress"].reset()
	 this.transportRequestForm.controls["zipcode"].reset()
  }
}
