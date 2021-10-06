import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-resident-search',
  templateUrl: './resident-search.component.html',
  styleUrls: ['./resident-search.component.scss'],
})
export class ResidentSearchComponent implements OnInit {
  options = [
    { name: 'Veteran', code: 'VT' },
    { name: 'Option 2', code: 'OPT2' },
  ];
  selectedResident: any;
  residentSearchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  tableValues = [
    {
      name: 'name 1',
      email: 'test1@mail.com',
      birthdate: '12/12/2020',
      phoneNumber: '123-456-7890',
      address: '123, street name, city',
    },
    {
      name: 'name 2',
      email: 'test2@mail.com',
      birthdate: '14/12/2020',
      phoneNumber: '123-456-7890',
      address: '123, street name, city',
    },
    {
      name: 'name 3',
      email: 'test3@mail.com',
      birthdate: '16/12/2020',
      phoneNumber: '123-456-7890',
      address: '123, street name, city',
    },
  ];
  columns = [
    { header: 'Name', field: 'name' },
    { header: 'Birthdate', field: 'birthdate' },
    { header: 'Address', field: 'address' },
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

  buildForm(): void {
    this.residentSearchForm = this.formBuilder.group({
      type: [''],
      firstName: [''],
      lastName: [''],
      dob: [],
    });
  }
  onSubmit(): void {}

  selectResident(index: number) {
    this.selectedResident = this.tableValues[index];
  }
}
