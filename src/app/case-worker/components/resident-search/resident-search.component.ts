import { DatePipe, DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
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
   // { name: 'Option 2', code: 'OPT2' },
  ];

  public selectedResident: any;
  public tableValues: any;
  public residentSearchForm!: FormGroup;
  public result: any;
  public maxDateValue: any;
  public data:any;
  public submit:boolean=true;
  newDate: any;
  

  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();

  submitted = false;
  public showSpinner: boolean = true;
  public grayOut: boolean=true;
  constructor(
    private formBuilder: FormBuilder,
    private service: ResidentSearchService,
    @Inject(DOCUMENT) private _document: Document,
    private router: Router,
    private datepipe: DatePipe,
    private cacheData: ClipBoardService
  ) {
    this.maxDateValue = new Date(new Date().getTime());
    this.setForm();
  }
  setForm(){
    this.service.getResidentSearchData().subscribe((res) => {
      setTimeout(()=>{
      this.data=res;
      if(this.data){
        this.showSpinner=false;
        this.grayOut=false;
      }
      this.tableValues = this.data;
    },100)
    });
  }

  selectResident(event: any) {
    console.log("selected veteran id",event.data.veteran_id)
    this.cacheData.set('selectedResidentVeteranId',event.data.veteran_id)
    this.router.navigateByUrl('case-worker/resident-search/initial-assessment/page-1', { skipLocationChange: true })
  }
  
  columns = [
    { header: 'Name', field: 'first_name' },
    { header: 'Birthdate', field: 'date_of_birth',date: true,format: 'dd/MM/yyyy' },
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

  onSubmit(data: any){    
    if(data.birthDate){
      this.newDate=this.datepipe.transform(data.birthDate, 'yyyy/MM/dd');
      data.birthDate = this.newDate;
    }
      this.result = this.tableValues.filter((index: any) => {
        let indexDate = this.datepipe.transform(index.date_of_birth, 'yyyy/MM/dd');        
      if(!data.birthDate){
        if(data.firstName && data.lastName){
          return (
            index.first_name.toLowerCase() === data.firstName.toLowerCase() &&
            index.last_name.toLowerCase() === data.lastName.toLowerCase() 
          );
        }else{
          return (
            index.first_name.toLowerCase() === data.firstName.toLowerCase()  
          );
        } 
      } else {
        return (
          index.first_name.toLowerCase() == data.firstName.toLowerCase() &&
          indexDate == data.birthDate
        );
      }
    });
    this.tableValues = this.result;
  }

 

  buildForm(): void {
    this.residentSearchForm = this.formBuilder.group({
      type: [''],
      firstName: ['', Validators.required],
      lastName: [''],
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

   resetData() {
    this.buildForm();
    this.setForm();
  }
}
