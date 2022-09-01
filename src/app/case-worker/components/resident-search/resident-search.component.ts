import { DatePipe, DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ResidentSearchService } from '../../services/resident-search.service';

@Component({
  selector: 'app-resident-search',
  templateUrl: './resident-search.component.html',
  styleUrls: ['./resident-search.component.scss'],
  providers: [DatePipe],
})
export class ResidentSearchComponent implements OnInit {
  options = [
    { name: 'Veteran', code: 'VT' },
    { name: 'Option 2', code: 'OPT2' },
  ];

  public selectedResident: any;
  public tableValues: any;
  public residentSearchForm!: FormGroup;
  public result: any;
  public maxDateValue: any;
  newDate: any;
  resultDate: any;
  latest_date: any;
  // public requestFormObject: any;

  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private service: ResidentSearchService,
    @Inject(DOCUMENT) private _document: Document,
    private router: Router,
    private datepipe: DatePipe
  ) {
    this.maxDateValue = new Date(new Date().getTime());

    this.service.getResidentSearchData().subscribe((res) => {
      this.tableValues = res;
      console.log(this.tableValues);
    });
  }

  selectResident(index: number) {
    this.selectedResident = this.tableValues[index];
  }
  
  columns = [
    { header: 'Name', field: 'first_name' },
    { header: 'Birthdate', field: 'date_of_birth' },
    { header: 'Address', field: 'address_main' },
  ];

  tabMenuItems: MenuItem[] = [
    {
      label: 'Initial Assessment',
      routerLink: ['./initial-assessment'],
      skipLocationChange: true,
    },
    {
      label: 'Treatment Plan',
      routerLink: ['./treatment-plan'],
      skipLocationChange: true,
    },
    {
      label: 'Weekly Progress notes',
      routerLink: ['./weekly-progress'],
      skipLocationChange: true,
    },
    {
      label: 'Consent Agreements',
      routerLink: ['./consent-agreements'],
      skipLocationChange: true,
    },
    {
      label: 'Financial',
      routerLink: ['./financial'],
      skipLocationChange: true,
    },
    { label: 'Medical', routerLink: ['./medical'], skipLocationChange: true },
    {
      label: 'Other/Misc. Correspondence',
      routerLink: ['./misc'],
      skipLocationChange: true,
    },
  ];
  ngOnInit(): void {
    this.buildForm();
  }

  // onSubmit=(event: any) =>{

  //   // if( this.submit == ""){
  //   //   this.ngOnInit();
  //   //   console.log('hi')
  //   // }else{
  //   //   console.log('hello')
  //   //   this.tableValues=this.tableValues.filter((data: any)=>{
  //   //     return data.submit.toLocaleLowerCase().match(this.submit.toLocaleLowerCase())
  //   //   })
  //   // }
  //   // console.log(this.residentSearchForm.value); ///submit the data to console

  //   // console.log(event)
  // }

  onSubmit(filters: any): void {
    // Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);

    //for filtering the data
    this.groupFilters.emit(filters);
   
    //will get date into object form
    this.newDate = filters.birthDate;

    //string format
    this.resultDate = this.datepipe.transform(this.newDate, 'MM-dd-yyyy');
    filters.birthDate = this.resultDate;
    console.log(filters);

    // console.log(typeof filters.birthDate);
    // var date = new Date(filters.birthDate);
    // let str = date.toDateString();
    // console.log(str)
    // console.log(typeof str)

    this.result = this.tableValues.filter((index: any) => {
      return (
        index.firstName == filters.firstName &&
        index.lastName == filters.lastName &&
        index.birthDate == filters.birthDate
      );
    });

    //store filter data
    //console.log(this.result);
    //this is for sending data console to browser
    this.tableValues = this.result;


    // console.log(this.tableValues);
    // this.requestFormObject = this.tableValues;
    // console.log(this.requestFormObject);
  }

 

  buildForm(): void {
    this.residentSearchForm = this.formBuilder.group({
      type: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: [''],
    });
  }

  get firstName() {
    return this.residentSearchForm.get('firstName');
  }

  get lastName() {
    return this.residentSearchForm.get('lastName');
  }

  get birthDate() {
    return this.residentSearchForm.get('birthDate');
  }



  refresh() {
    this.buildForm();
    let currentUrl = this.router.url;
    this.router
      .navigateByUrl('resident-search', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }
}
